/**
 * Kahawa Pride shoot intake
 *
 * One Google Apps Script web app that serves a mobile intake form to the
 * camera crew (no login) and writes one row per shoot into a Google Sheet
 * that the producer owns.
 *
 * The crew submits by shoot. Episode tagging and status live in the Sheet
 * and are edited by the producer only. The form never shows an episode field.
 */

var CONFIG = {
  // The ID of your Google Sheet. It is the long string in the Sheet URL,
  // between /d/ and /edit. Leave blank if the script is bound to the Sheet
  // (created via Extensions, Apps Script), in which case the active
  // spreadsheet is used automatically.
  SHEET_ID: '',

  // The tab that receives submissions. Created for you by runSetup().
  SHEET_NAME: 'Shoots',

  // Crew names shown in the "Who filmed" dropdown. Edit freely.
  // The form also offers "Someone else" with a free text box, so a name
  // missing from this list never blocks a submission.
  CREW_NAMES: ['Susan', 'Crew 2', 'Crew 3'],

  // Optional soft gate. If you set a word here (letters and numbers only),
  // the form only loads and accepts submissions when the link includes it,
  // for example: https://script.google.com/.../exec?k=harambee
  // To rotate the link later, change this word and share the new link.
  // Leave blank to disable, the bare /exec link then works as is.
  LINK_KEY: ''
};

var HEADERS = [
  'Timestamp',
  'When',
  'Name of the content',
  'Place',
  'Event or match',
  'Who filmed',
  'Drive links',
  'Note',
  'Episode',
  'Status'
];

/**
 * Run this once from the Apps Script editor after pasting in your Sheet ID.
 * It creates the Shoots tab with headers and the Episode View tab.
 * Safe to run again, it never deletes data.
 */
function runSetup() {
  var ss = getSpreadsheet_();

  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setColumnWidth(7, 320); // Drive links
  }

  var view = ss.getSheetByName('Episode View');
  if (!view) {
    view = ss.insertSheet('Episode View');
    view.getRange('A1').setValue('Episode:');
    view.getRange('B1').setValue('Ep 65');
    view.getRange('A2').setValue(
      'Type an episode label in B1. Everything tagged with it in the ' +
      CONFIG.SHEET_NAME + ' tab shows below. Read only, edit tags in ' +
      CONFIG.SHEET_NAME + '.'
    );
    view.getRange(4, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    view.getRange('A5').setFormula(
      '=IFERROR(FILTER(' + CONFIG.SHEET_NAME + '!A2:J, ' +
      CONFIG.SHEET_NAME + '!I2:I=$B$1), "No shoots tagged with that episode yet")'
    );
    view.getRange('A1:B1').setFontWeight('bold');
  }

  Logger.log('Setup complete. Sheet: ' + ss.getUrl());
}

/**
 * Serves the intake form.
 */
function doGet(e) {
  if (CONFIG.LINK_KEY && (!e || !e.parameter || e.parameter.k !== CONFIG.LINK_KEY)) {
    return HtmlService.createHtmlOutput(
      '<p style="font-family:sans-serif;padding:24px">This link is no longer active. ' +
      'Ask for the current form link.</p>'
    );
  }
  var template = HtmlService.createTemplateFromFile('Form');
  template.crewNames = CONFIG.CREW_NAMES;
  template.linkKey = CONFIG.LINK_KEY;
  return template
    .evaluate()
    .setTitle('Kahawa Pride: log a shoot')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1');
}

/**
 * Called by the form via google.script.run. Writes one row per shoot.
 * Returns a small object the form uses to confirm or show an error.
 */
function submitShoot(payload) {
  if (CONFIG.LINK_KEY && payload.linkKey !== CONFIG.LINK_KEY) {
    return { ok: false, message: 'This link is no longer active. Ask for the current form link.' };
  }

  var name = clean_(payload.contentName);
  var links = clean_(payload.driveLinks);
  if (!name) {
    return { ok: false, message: 'Please add a name for what you shot.' };
  }
  if (!links) {
    return { ok: false, message: 'Please paste at least one Drive link.' };
  }

  var row = [
    new Date(),
    clean_(payload.when),
    name,
    clean_(payload.place),
    clean_(payload.eventOrMatch),
    clean_(payload.whoFilmed),
    links,
    clean_(payload.note),
    '', // Episode, producer only
    ''  // Status, producer only
  ];

  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var ss = getSpreadsheet_();
    var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(CONFIG.SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }

  return { ok: true };
}

function getSpreadsheet_() {
  if (CONFIG.SHEET_ID) {
    return SpreadsheetApp.openById(CONFIG.SHEET_ID);
  }
  var active = SpreadsheetApp.getActiveSpreadsheet();
  if (!active) {
    throw new Error(
      'No Sheet configured. Paste your Sheet ID into CONFIG.SHEET_ID at the top of Code.gs.'
    );
  }
  return active;
}

function clean_(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/\s+$/, '').replace(/^\s+/, '').slice(0, 5000);
}

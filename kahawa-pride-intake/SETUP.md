# Kahawa Pride shoot intake: setup notes

Two files make up the whole tool:

- `Code.gs`: the Apps Script backend. Serves the form and writes rows to your Sheet.
- `Form.html`: the mobile intake form the crew sees.

There is no database and no login. The Sheet is the backend, the form is the front door, and the whole thing runs inside your own Google account.

## 1. Create the Sheet

1. Go to [sheets.new](https://sheets.new) and create a blank spreadsheet. Name it something like `Kahawa Pride Shoots`.
2. Copy its ID from the URL. The URL looks like `https://docs.google.com/spreadsheets/d/THIS_LONG_STRING/edit` and the ID is the long string between `/d/` and `/edit`.

You do not need to type any headers by hand. The setup function in step 3 creates the tabs and columns for you. For reference, the layout it creates on the `Shoots` tab is:

| Column | Header | Who writes it |
|---|---|---|
| A | Timestamp | The script, automatically on submit |
| B | When | Crew (free text, week label or date) |
| C | Name of the content | Crew (their plain label for the shoot) |
| D | Place | Crew |
| E | Event or match | Crew |
| F | Who filmed | Crew (dropdown, or typed name) |
| G | Drive links | Crew (one or more, one per line) |
| H | Note | Crew (optional) |
| I | Episode | You only (e.g. "Ep 65") |
| J | Status | You only (blank, "pulled", "cut") |

Setup also creates an `Episode View` tab: type an episode label (for example `Ep 65`) into cell B1 and every shoot you have tagged with that label in column I appears below it. It reads from the Shoots tab with a FILTER formula, so it is live and effectively read only. The crew never touches it and never sees it.

Optional polish for columns I and J, once, by hand:

- Select column J, then Data, Data validation, add a dropdown with the values `pulled` and `cut`. Blank stays the default.
- Data, Create a filter on row 1 of the Shoots tab, so you can filter by Episode with one tap on the column header.

## 2. Create the Apps Script project

1. Open your new Sheet, then Extensions, Apps Script. This creates a script bound to the Sheet, which is the simplest arrangement.
2. In the editor, replace the contents of the default `Code.gs` with the `Code.gs` from this folder.
3. Click the plus next to Files, choose HTML, name it exactly `Form` (Apps Script adds the `.html`), and paste in the contents of `Form.html`.
4. At the top of `Code.gs`, edit `CONFIG`:
   - `SHEET_ID`: you can leave this blank because the script is bound to the Sheet. If you ever move the script to a standalone project, paste the Sheet ID here.
   - `CREW_NAMES`: replace with the real crew names. Susan first.
   - `LINK_KEY`: leave blank for now. See the tradeoffs section for what it does.
5. Save (the disk icon or Ctrl+S).

## 3. Run setup once

1. In the toolbar dropdown that lists functions, pick `runSetup`, then click Run.
2. Google will ask you to authorize the script. It runs as you and only touches your own spreadsheet, so approve it: choose your account, click Advanced if it warns the app is unverified, then Allow. The warning appears because you wrote the script yourself rather than installing a published app, it is expected.
3. Check the Sheet: you should now have a `Shoots` tab with bold headers and an `Episode View` tab.

## 4. Deploy the web app

1. In the Apps Script editor, click Deploy, New deployment.
2. Click the gear next to Select type and choose Web app.
3. Set:
   - Description: anything, e.g. `Shoot intake v1`
   - Execute as: **Me**. This is what lets the crew write into your Sheet without accounts. The script runs under your identity, they never authenticate.
   - Who has access: **Anyone**. Not "Anyone with Google account", plain Anyone, otherwise phones that are not signed in to Google get blocked.
4. Click Deploy and copy the web app URL. It ends in `/exec`.
5. Open that URL on your own phone and submit a test shoot. Confirm a row lands in the Shoots tab and the form shows the sent confirmation.

That URL is the only thing the crew ever needs. Send it in WhatsApp, tell them to bookmark it or add it to their home screen (Chrome and Safari both offer Add to Home Screen, which makes it feel like an app).

## 5. Updating the form later

Apps Script pins deployments to a version, so edits do not go live on their own:

1. Make your changes in the editor and save.
2. Deploy, Manage deployments, click the pencil on the active deployment, set Version to New version, then Deploy.

The URL stays the same, which is what you want for routine edits. Creating a brand new deployment instead mints a brand new URL, which is what you want when rotating the link (below).

## Tradeoffs of the no-login approach, in plain English

**What you are trading away.** Anyone who has the URL can open the form and post rows into your Sheet. There is no identity check, so a submission that says Susan filmed it is a claim, not a fact. If the link leaked (forwarded WhatsApp message, someone's phone borrowed), a stranger could spam junk rows or paste misleading Drive links.

**Why that is an acceptable trade here.** The form can only append rows to one tab of one spreadsheet. It cannot read the Sheet, edit existing rows, touch your Drive, or see anything else in your account. The blast radius of abuse is junk rows you delete, and every row is timestamped so junk is easy to spot and bulk delete. Against that, the alternative (accounts and passwords for a camera crew on phones mid-season) is exactly the friction that made the old sheet fail. One more habit worth keeping: the crew pastes Drive links, and you or the editor open them. Treat an unexpected link in the Sheet the way you would treat an unexpected link in email, glance at the row first and skip anything that looks off.

**How to revoke or rotate the link if you ever need to.** Two levers, from heaviest to lightest:

1. **Rotate the URL (the hard cutoff).** In the Apps Script editor: Deploy, Manage deployments, Archive the current deployment. The old URL dies instantly, anyone holding it gets an error page. Then Deploy, New deployment to mint a fresh URL and share it with the crew. Total time, about a minute, no data touched.
2. **Rotate the key (the soft gate, optional).** Set `LINK_KEY` in `CONFIG` to a word, for example `harambee`, redeploy a new version, and share the link as `...exec?k=harambee`. The bare URL then shows a polite "link no longer active" page. To rotate, change the word and send the new link. This is lighter than archiving because the base URL never changes, only the word does. It is a speed bump, not security, but it means a leaked screenshot of the base URL is useless on its own.

And the quiet third lever: the Sheet is yours. Sharing the form URL never shares the spreadsheet, so your Episode and Status columns, and everything else in your account, stay private no matter what happens to the link.

## Testing checklist (for your solo run and the Susan pilot)

- Submit from your own phone on mobile data, not wifi, since that is the crew's real network.
- Submit two shoots back to back and confirm the form resets but keeps When and Who filmed, then check both rows landed.
- Paste three Drive links on separate lines in one submission and confirm they arrive in one cell.
- Tag two test rows with `Ep 65` in column I and confirm the Episode View tab shows exactly those rows when B1 says `Ep 65`.
- Leave everything except the content name and link blank and confirm it still submits, the form should never fight someone who is in a hurry.

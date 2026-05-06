# Film Festival GitHub Pages Site

This is a static website for a student film festival project titled:

`Telling Chinese Stories to the World: Cultural Soft Power and Confidence on Screen`

## Files

- `index.html`: page structure and festival content
- `styles.css`: visual design and responsive layout
- `script.js`: short video upload preview
- `assets/images/`: five film posters

## Publish To GitHub Pages

1. Create a GitHub repository.
2. Upload all files in this folder to the repository root.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/root`.
6. Save, then wait for GitHub Pages to publish the site.

## Video Note

The current upload feature previews a local short video in the browser only.
If you want the site to always show one fixed online video:

1. Add your video file into the repository, for example `assets/video/trailer.mp4`.
2. In `index.html`, set the `src` of `#festivalVideo` to that file.
3. Remove or keep the upload input depending on your presentation needs.

## Easy Custom Edits

- Replace poster images in `assets/images/`
- Update festival text in `index.html`
- Adjust colors and spacing in `styles.css`

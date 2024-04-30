# Sample Website: E-Bikes + Data Cloud Web SDK + LWR

This is a sample website built using LWR to show case the abilities of **Data Cloud Interactions Web SDK**.

## Basic Configuration

1. Create a connector using the `websdk-schema-ebikes.json` file in this repo.
2. Replace the script tag in `layouts/main.njk` file with the script from the created connector.
   
## Running the Project in dev Mode

```bash
npm install
npm run build
npm run dev
```

Open the site at [http://localhost:3000](http://localhost:3000)

## Events built into the website
3. Click the `Opt In` button to send a **ConsentLog** event. Refer to `src/modules/my/consent` component.
4. Click on a product tile to send a **Catalog** event. Refer to `src/modules/my/app` component.
5. Click on the `Send Identity Event` button to send an **Identity** event. Refer to `src/modules/my/identity` component.
6. Click on the link in the footer to send a **Custom** event. Refer to `layouts/main.njk` file for the sitemap.

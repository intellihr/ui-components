### Integrating ui-components With Your Project

1. It's simple. Let's add that into your project:

    ```bash
    yarn add @intellihr/ui-components react react-dom foundation-sites jquery styled-components
    # or
    npm i @intellihr/ui-components react react-dom foundation-sites jquery styled-components
    ```

2. Then included the project css and this project's components css into your project's entry point. e.g. in CRA, it's the `index.js`:

    ```javascript
    import '@intellihr/ui-components/dist/index.css'
    import '@intellihr/ui-components/dist/ui-components.css'
    ```

3. Make sure your project knows how to handle css file type, which is quite simple if you use webpack(and normally your project should have already setup):

    ```javascript
    {
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader')
        }
      ]
    }

    ```

4. Then you could start using the components! Test out by:

    ```javascript
    import { Callout } from '@intellihr/ui-components'

    <Callout type="info">
      <div className="title">
      Information!
      </div>
      Bringing you the lasted news.
    </Callout>
    ```

### Integrating Your Local Build of ui-components With Your Project

In order to test how components we're developing look live in the website, we need to be able to point our local builds to the local ui-components that is in development.

#### SPA

1. Run ui-components as per usual in your local environment by running `yarn` and then `docker-compose up local`
2. Open a second terminal in the ui-components folder and run `yarn build:watch`
3. Modify your SPA build's `docker-compose.override.yml` as per the example file to include the volume link to your local ui-components. The tells docker to replace the `node_modules/intellihr/ui-components` folder in SPA with your host's `ui-components` folder.
4. Run SPA as per usual in your local environment by running `yarn` and then `docker-compose up local` - any changes you make in your local ui-components should now be reflected in your SPA pages

#### Lapis

1. Run ui-components as per usual in your local environment by running `yarn` and then `docker-compose up local`
2. Open a second terminal in the ui-components folder and run `yarn build:watch`
3. Open a third terminal in the ui-components folder and run `yarn link` - you should get a success message like the following in your terminal:

    `success Registered "@intellihr/ui-components"`

4. Navigate to your Lapis workspace in the terminal, and run `yarn link "@intellihr/ui-components"` - this will create a symlink between your local ui-components build, and the package folder in Lapis

    **Note:** Running `yarn` in the Lapis workspace will destroy the symlink, so if you need to run `yarn` do so before you link ui-components to Lapis.

    To check if your symlink is working you can run `ls -al node_modules/@intellihr/` in your Lapis workspace, and you should see something like this signifying the link: `ui-components -> ../../../../../.config/yarn/link/@intellihr/ui-components`

5. Run Lapis as per usual using `docker-compose up local` and `yarn build:watch` in two terminals - any changes you make in your local ui-components should now be reflected in your Lapis pages
6. To remove the symlink you can run `yarn unlink "@intellihr/ui-components"` in the Lapis workspace, and `yarn unlink` in the ui-components workspace. Once you have removed the symlink you will need to run `yarn` in the Lapis workspace again to pull its original ui-components package.

# Node - Delete a Recording

This project serves as a guide to help you build an application with Persephony. Specifically, the project will:

- Delete a Recording   

## Setting up your new app within your Persephony account

To get started using a persephony account, follow the instructions [here](https://persephony-docs.readme.io/docs/getting-started-with-persephony).

## Setting up the Tutorial

1. Install the node packages necessary using command:

   ```bash
   $ yarn install
   ```

2. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                             |
   | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID              | Account ID which can be found under [API Keys](https://www.persephony.com/dashboard/portal/account/authentication) in Dashboard                                                         |
   | AUTH_TOKEN              | Authentication Token which can be found under [API Keys](https://www.persephony.com/dashboard/portal/account/authentication) in Dashboard                                               |

3. Provide a value for the variable `recordingId` in deleteRecording.js. You can find the recording Id in the [recordings tab of the dashboard](https://www.persephony.com/dashboard/portal/recordings). To find out more about recordings, check out the [recording documentation](https://docs.persephony.com/docs/recordings-3)

## Runnning the Tutorial

1. Run the application using command:

   ```bash
   $ node deleteRecording.js
   ```


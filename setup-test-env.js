/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom/extend-expect"
/* eslint-enable import/no-extraneous-dependencies */
import nodeCrypto from "crypto"

// You can override environment variables globally for the tests environment below.
process.env = Object.assign(process.env, {
  // For testing loggingProvider
  GATSBY_remoteLoggingEnabled: false,
  GATSBY_remoteLoggingHost: "http://localhost:3000/jsnlog.logger",
  GATSBY_msalLogging: false,
})

// For testing Msal authenticationProvider
window.crypto = {
  getRandomValues: buffer => nodeCrypto.randomFillSync(buffer),
}

// For dealing with i18n during Jest runs
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key }),
  Trans: ({ children }) => children,
}))

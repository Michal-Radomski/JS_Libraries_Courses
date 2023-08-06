import { Buffer } from "safe-buffer";
import Keygrip from "keygrip";

// Import config
const keys = require("../../config/keys");
import { IUserModel } from "../../models/UserModel";

// console.log({Buffer});

export const sessionFactory = (
  user: IUserModel
): {
  sessionString: string;
  cookieSig: string;
} => {
  const sessionObject = {
    passport: {
      user: user._id.toString(),
    },
  };

  const keygrip = new Keygrip([keys.cookieKey]);
  // console.log({ keygrip });

  const sessionString = Buffer.from(JSON.stringify(sessionObject)).toString("base64");
  // console.log({ sessionString });
  const cookieSig = keygrip.sign("session=" + sessionString);
  // console.log({ cookieSig });

  return { sessionString, cookieSig };
};

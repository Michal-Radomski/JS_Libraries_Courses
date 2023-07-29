import crypto from "crypto";

const start = Date.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", (_err: Error | null, _derivedKey: Buffer) => {
  console.log("1:", Date.now() - start);
  // const key = _derivedKey;
  // console.log({ key });
  // console.log(key.toString("base64"));
  // console.log(key.toString("hex"));
  // console.log(key.toString());
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});

import { RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = !import.meta.env.DEV; //* not in dev mode!

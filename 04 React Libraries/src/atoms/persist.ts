import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-course",
  storage: localStorage,
});

export default persistAtom;

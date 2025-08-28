import { atomWithStorage } from "jotai/utils";

export const userTypeAtom = atomWithStorage<string>("userType", "Personal")
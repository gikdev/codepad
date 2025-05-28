import { atomWithStorage } from "jotai/utils"

export const writtenStuffAtom = atomWithStorage("writtenStuff", "")
export const selectedLanguageAtom = atomWithStorage("selectedLanguage", "plaintext")

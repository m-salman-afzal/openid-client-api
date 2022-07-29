import {generators} from "openid-client";
import path from "path";

import Config from "../../Infrastructure/Config";

const {storagePath} = Config;

const STORAGE_PATH = {};

const CODE_VERIFIER = generators.codeVerifier();

const CODE_CHALLENGE = generators.codeChallenge(CODE_VERIFIER);

export default {
    STORAGE_PATH,
    CODE_VERIFIER,
    CODE_CHALLENGE
};

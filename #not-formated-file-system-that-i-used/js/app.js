// Import main stylesheet
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Functionality ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Check webp support, add webp or no-webp class to HTML /
/ (i) necessary for correct webp display with css */
flsFunctions.isWebp();

/*
Parallax mouse module
*/
import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Other ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Import files with custom code */
import "./files/script.js";
//============================================================================================================================================================================================================================================

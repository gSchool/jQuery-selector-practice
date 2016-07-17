window.Warmup = {

  initialize: function () {

    /*
      Description: show the names of the people at the top level
      Outcome: Izaiah, Eulalia
    */
    showNamesForSelector("#top-level-button", "#root > li > span");

    /*
      Description: show the names of the people at the second level
      Outcome: Joel, Aaliyah, Claude
    */
    showNamesForSelector("#second-level-button", ___);
    //                       You need to replace ^^^ with a valid CSS selector

    /*
      Description: show the names of the people who have data-employment="full-time"
      Outcome: Izaiah, Della, Lowell
    */
    showNamesForSelector("#full-time-button", ___);

    /*
      Description: show the names of the people with the class name "talkative"
      Outcome: Claude, Lurline
    */
    showNamesForSelector("#talkative-button", ___);

    /*
      Description: show the names of the people who have an id of "vp"
      Outcome: Eulalia
    */
    showNamesForSelector("#vp-button", ___);

    /*
      Description: show the names of the people under Isaiah
      Outcome: Joel, Della, Lurline, Aaliyah, Elisa
    */
    showNamesForSelector("#under-isaiah-button", ___);

    /*
      Description: show the names of the people under Eulalia
      Outcome: Claude, Lowell
    */
    showNamesForSelector("#under-eulalia-button", ___);

    /*
      Description: values of all of the input fields of type text
      Outcome: Joe, Example
    */
    showValuesForSelector("#text-field-button", ___);

  }

};

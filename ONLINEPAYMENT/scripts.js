
  new window.IntaSend({
  publicAPIKey: "<REPLACE-WITH-YOUR-PUBLISHABLE-KEY>",
  live: false //set to true when going live
  })
  .on("COMPLETE", (results) => {console.log("Do something on success", results)})
  .on("FAILED", (results) => {console.log("Do something on failure", results)})
  .on("IN-PROGRESS", (results) => {console.log("Payment in progress status", results)})

$(document).ready(function() {
    // Hide content
    $("#hideBtn").click(function() {
        $("#contentBox").hide();
        $("#status").text("Status: Content Hidden!");
    });

    // Show content
    $("#showBtn").click(function() {
        $("#contentBox").show();
        $("#status").text("Status: Content Shown!");
    });

    // Mouse enter event - change to a different color (skyblue)
    $("#box1").mouseenter(function() {
        $(this).css("background-color", "skyblue");
        $("#status").text("Status: Mouse Entered Box 1!");
    });

    // Mouse leave event - change to a different color (yellow)
    $("#box2").mouseleave(function() {
        $(this).css("background-color", "yellow");
        $("#status").text("Status: Mouse Left Box 2!");
    });

    // Click event - change to a different color (lime)
    $("#box3").click(function() {
        $(this).css("background-color", "lime");
        $("#status").text("Status: Box 3 Clicked!");
    });

    // Double click event - change to a different color (magenta)
    $("#box4").dblclick(function() {
        $(this).css("background-color", "magenta");
        $("#status").text("Status: Box 4 Double Clicked!");
    });
});

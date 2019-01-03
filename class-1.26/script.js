/*
১.২৬ - IIFE এবং গ্লোবাল স্কোপ পরিস্কার রাখা
*/

!function() {
    var x = 5;
    console.log(x);
}()

+function() {
    var x = 5;
    console.log(x);
}()  
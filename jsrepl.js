WScript.Echo("JSREPL - JavaScript REPL (C) 2014 KIM Taegyoon");
while (true) {
  try {
    WScript.StdOut.Write("> ");
    var expr=WScript.StdIn.ReadLine();
    WScript.Echo(eval(expr));
  }
  catch(err) {
    WScript.Echo(err.message);
  }
}

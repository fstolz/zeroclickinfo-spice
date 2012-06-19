function ddg_spice_deb_version(ir) 
{
    var out, tmp, div, div2, link, img, item, program, line, version;
    out = '';

    console.log(ir);

    if (ir == ""){ return 1;};
    items = new Array();
    items[0] = new Array();
    program = ir.split("|")[0];
    console.log(program);
    ir = ir.split('\n');
    out += '<table id="debianVersions">\n';
    out += '<tr><th>Debian Version</th><th>Package Version</th><th>Architecture</th></tr>';
    for (var i = 0; i < ir.length-1; i++) {
	out+= '<tr>';
	line = ir[i].split("|");
	out += '<td>' + line[2] + "</td>";
	version = line[1].replace(/-/, "\&\#8209;");
	out += '<td>' + version  + "</td>";
	out += '<td>' + line[3] + "</td>";
	out += '</tr>\n';
    } 
    out+= "</table>";
    items[0]['a'] = out;
    items[0]['h'] = 'Versions of ' + program + ' in Debian';
    items[0]['s'] = 'qa.debian.org';
    items[0]['u'] = 'http://qa.debian.org/madison.php?package=' + program + '&table=debian&a=&c=&s=#';
    nra(items);
  
}

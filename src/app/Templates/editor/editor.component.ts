import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/editor.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editorValue: any;
  config: any;

  public configuration: any = {
    plugins: `print preview fullpage powerpaste searchreplace autolink 
              directionality advcode visualblocks visualchars fullscreen
              image link media mediaembed template codesample table charmap
              hr pagebreak nonbreaking anchor toc insertdatetime advlist lists
              wordcount tinymcespellchecker a11ychecker imagetools textpattern help
              formatpainter permanentpen pageembed tinycomments mentions linkchecker`,
    image_advtab: true,
    toolbar: `formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | 
              link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | 
              removeformat | addcomment | undo redo |emoticons| 
              table tabledelete | tableprops tablerowprops tablecellprops | 
              tableinsertrowbefore tableinsertrowafter tabledeleterow | 
              tableinsertcolbefore tableinsertcolafter tabledeletecol`,
    height: 500,
    allow_html_in_named_anchor: false
  };

  constructor(private _editorService: EditorService,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getContent();
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
           <body onload="window.print();window.close()">${this.editorValue}</body>
      </html>`
    );
    popupWin.document.close();
  }

  handleEvent(event: any) {
    var docparser = new DOMParser();
    var xmldoc = docparser.parseFromString(this.editorValue, "text/xml");
    console.log(xmldoc);
  }

  getContent() {
    this._editorService.getContent().subscribe(response => {
      this.editorValue = this.domSanitizer.bypassSecurityTrustHtml(response);
    })
  }
}

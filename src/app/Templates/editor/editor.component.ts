import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editorValue: string;
  config: any;

  public configuration: any = {
    // plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount tinymcespellchecker a11ychecker imagetools textpattern help formatpainter permanentpen pageembed tinycomments mentions linkchecker',
    // toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
    // image_advtab: true,
    // content_css: [
    //   '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    //   '//www.tiny.cloud/css/codepen.min.css'
    // ],
    // link_list: [
    //   { title: 'My page 1', value: 'http://www.tinymce.com' },
    //   { title: 'My page 2', value: 'http://www.moxiecode.com' }
    // ],
    // image_list: [
    //   { title: 'My page 1', value: 'http://www.tinymce.com' },
    //   { title: 'My page 2', value: 'http://www.moxiecode.com' }
    // ],
    // image_class_list: [
    //   { title: 'None', value: '' },
    //   { title: 'Some class', value: 'class-name' }
    // ],
    // importcss_append: true,
    // height: 400,
    // file_picker_callback: function (callback, value, meta) {
    //   /* Provide file and text for the link dialog */
    //   if (meta.filetype === 'file') {
    //     callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
    //   }

    //   /* Provide image and alt text for the image dialog */
    //   if (meta.filetype === 'image') {
    //     callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
    //   }

    //   /* Provide alternative source and posted for the media dialog */
    //   if (meta.filetype === 'media') {
    //     callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
    //   }
    // },
    // templates: [
    //   { title: 'Some title 1', description: 'Some desc 1', content: 'My content' },
    //   { title: 'Some title 2', description: 'Some desc 2', content: '<div class="mceTmpl"><span class="cdate">cdate</span><span class="mdate">mdate</span>My content2</div>' }
    // ],
    // template_cdate_format: '[CDATE: %m/%d/%Y : %H:%M:%S]',
    // template_mdate_format: '[MDATE: %m/%d/%Y : %H:%M:%S]',
    // image_caption: true,
    // spellchecker_dialog: true,
    // spellchecker_whitelist: ['Ephox', 'Moxiecode'],
    // tinycomments_mode: 'embedded',
    // ///mentions_fetch: mentionsFetchFunction,
    // content_style: '.mce-annotation { background: #fff0b7; } .tc-active-annotation {background: #ffe168; color: black; }'

    plugins: `print preview fullpage powerpaste searchreplace autolink 
              directionality advcode visualblocks visualchars fullscreen
              image link media mediaembed template codesample table charmap
              hr pagebreak nonbreaking anchor toc insertdatetime advlist lists
              wordcount tinymcespellchecker a11ychecker imagetools textpattern help
              formatpainter permanentpen pageembed tinycomments mentions linkchecker`,
    ////menubar: "table|emoticons|insert|formatselect",
    image_advtab: true,
    toolbar: `formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | 
              link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | 
              removeformat | addcomment | undo redo |emoticons| 
              table tabledelete | tableprops tablerowprops tablecellprops | 
              tableinsertrowbefore tableinsertrowafter tabledeleterow | 
              tableinsertcolbefore tableinsertcolafter tabledeletecol`,
    height: 500
    // plugins: 'lists advlist',
    // toolbar: `undo redo | bold italic | bullist numlist outdent indent|
    //           table tabledelete | tableprops tablerowprops tablecellprops |
    //           tableinsertrowbefore tableinsertrowafter tabledeleterow |
    //           tableinsertcolbefore tableinsertcolafter tabledeletecol`,
    // height: 500
  };

  constructor() { }

  ngOnInit() {
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
}

import { Component, ElementRef, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
})
export class LinksPage implements OnInit {


  linkUrls: Array<any> = [
    {
      linkHeader: 'About Us',
      links: [
        {
          linkName:'Judicial Officers',
          actualLink:'http://judiciary.go.ug/data/smenu/91/1/Judicial%20Officers.html'
        },
        {
          linkName:'CCAS',
          actualLink:'https://ccas.judicature.go.ug/ccas/'
        },
        {
          linkName:'Court Forms',
          actualLink:'http://judiciary.go.ug/data/dpublications/10/Releases_publications.html'
        },
        {
          linkName:'Law Reporting',
          actualLink:'http://judiciary.go.ug/data/smenu/25/Law%20Reporting.html'
        }
      ]
    },
    {
      linkHeader: 'Other Links',
      links: [
        {
          linkName:'Judicial Calendar',
          actualLink:'http://judiciary.go.ug/data/qmenu/9/1/.html'
        },
        {
          linkName:'Judiciary Intranet',
          actualLink:'http://intranet/sites/highcourt/default.aspx'
        },
        {
          linkName:'Photo Gallery',
          actualLink:'http://judiciary.go.ug/data/pgallery/10/2/Photo_Gallery.html'
        },
        {
          linkName:'FAQs',
          actualLink:'http://judiciary.go.ug/data/faqs/16/3/.html'
        }
      ]
    },
    {
      linkHeader: 'Quick Links',
      links: [
        {
          linkName:'Webmail',
          actualLink:'https://mail.judicature.go.ug/owa'
        },

        {
          linkName:'Uganda Legal Information Institute',
          actualLink:'http://www.ulii.org/'
        },
        {
          linkName:'Uganda Law Library',
          actualLink:'http://www.ugandalawlibrary.com/ull/default.asp'
        },
        {
          linkName:'Law Libraries',
          actualLink:'http://judiciary.go.ug/data/qmenu/17/5/Law%20Libraries.html'
        }
      ]
    },
    {
      linkHeader: 'Related Links',
      links: [
        {
          linkName:'Uganda Law Society',
          actualLink:'http://www.uls.or.ug/'
        },
        {
          linkName:'Parliament of Uganda',
          actualLink:'http://www.parliament.go.ug/'
        },
        {
          linkName:'Justice Centres Uganda',
          actualLink:'http://www.justicecentres.go.ug'
        },
        {
          linkName:'Ministry of Justice and Constitution Affairs',
          actualLink:'http://www.justice.go.ug/'
        },
        {
          linkName:'Justice, Law and Order',
          actualLink:'http://www.jlos.go.ug/'
        },
        {
          linkName:'Judicial Service Commission',
          actualLink:'http://www.jsc.go.ug/'
        }
      ]
    }
  ]

  /**
    * Property that will store the selected hyperlink from the view template
    * @private
    * @name _link
    * @type {string}
    */
   private _link : string;



   /**
    * HTML string that contains embedded hyperlinks (that we will be 'activating'
    * later on in the script)
    * @public
    * @name snippet
    * @type {string}
    */
   public snippet : string = `
                              <ul>
                                 <li>
                                    <a href="http://www.apple.com">Apple</a>
                                 </li>
                                 <li>
                                    <a href="http://www.facebook.com">Facebook</a>
                                 </li>
                                 <li>
                                    <a href="http://www.google.com">Google</a>
                                 </li>
                                 <li>
                                    <a href="http://www.microsoft.com">Microsoft</a>
                                 </li>
                                 <li>
                                    <a href="http://www.twitter.com">Twitter</a>
                                 </li>
                              </ul>`;




   /**
    * Initialises the class with required dependencies
    * @constructs
    * @param {InAppBrowser}   _browser      Ionic Native InAppBrowser plugin module
    * @param {ElementRef}     _element      Angular ElementRef module
    */

  constructor(private _browser : InAppBrowser, private _element : ElementRef) { }
  

  /**
    * Use Angular OnInit lifecycle hook to trigger functionality when the view is initialising
    * @public
    * @method ngOnInit
    * @return {none}
    */
  ngOnInit():void {

    this._enableDynamicHyperlinks();
  }

  /**
    * Enable hyperlinks that are embedded within a HTML string
    * @private
    * @method _enableDynamicHyperlinks
    * @return {none}
    */
   private _enableDynamicHyperlinks() : void
   {
      // Provide a minor delay to allow the HTML to be rendered and 'found'
      // within the view template
      setTimeout(() =>
      {
         // Query the DOM to find ALL occurrences of the <a> hyperlink tag
         const urls : any    = this._element.nativeElement.querySelectorAll('a');

         // Iterate through these
         urls.forEach((url) =>
         {
            // Listen for a click event on each hyperlink found
            url.addEventListener('click', (event) =>
            {
               // Retrieve the href value from the selected hyperlink
               event.preventDefault();
               this._link = event.target.href;

               // Log values to the console and open the link within the InAppBrowser plugin
               console.log('Name is: ' + event.target.innerText);
               console.log('Link is: ' + this._link);
               this._launchInAppBrowser(this._link);
            }, false);
         });
      }, 2000);
   }



   /**
    * Creates/launches an Ionic Native InAppBrowser window to display hyperlink locations within
    * @private
    * @method _launchInAppBrowser
    * @param {string}    link           The URL to visit within the InAppBrowser window
    * @return {none}
    */
   private _launchInAppBrowser(link : string) : void
   {
      let opts : string = "location=yes,clearcache=yes,hidespinner=no"
      this._browser.create(link, '_blank', opts);
   }

}

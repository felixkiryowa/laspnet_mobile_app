import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criminal',
  templateUrl: './criminal.page.html',
  styleUrls: ['./criminal.page.scss'],
})
export class CriminalPage implements OnInit {

  magistrateCourtAct: Array<any> = [
    {
      id: 1,
      section: 'Criminal proceedings may be instituted in one of the following ways',
      steps : [
        {
          step1: 'By a police officer bringing a person arrested with or without a warrant before a magistrate upon a charge;',
          step2: `By a public prosecutor or a police officer laying a charge against a person before a magistrate and requesting 
          the issue of a warrant or a summons`,
          step3 : `By any person, other than a public prosecutor or a police officer, 
          making a complaint as provided in subsection (3) and applying for the issue of a warrant or 
          a summons in the manner hereafter mentioned`
        }
      ]
    },
    {
      id:2,
      section: `The validity of any proceedings instituted or purported to be instituted under subsection (1) 
      shall not be affected by any defect in the charge or complaint or by the fact that a summons or warrant was 
      issued without any complaint or charge or, in the case of a warrant, without a complaint on oath`,
      steps: [

      ]
    },
    {
      id:3,
      section: `
      Any person, other than a public prosecutor or a police officer, who has reasonable and probable cause to believe 
      that an offence has been committed by any person may make a complaint of the alleged offence to a magistrate who 
      has jurisdiction to try or inquire into the alleged offence, or within the local limits of whose jurisdiction the 
      accused person is alleged to reside or be. Every such complaint may be made orally or in writing signed by the complainant, 
      but if made orally shall be reduced into writing by the magistrate and when so reduced shall be signed by the complainant.
      `,
      steps: [

      ]
    },
    {
      id:4,
      section: `
      Upon receiving a complaint under subsection (3), the magistrate shall consult the local chief of the area in which the 
      complaint arose and put on record the gist of that consultation; but where the complaint is supported by a letter from the local chief, 
      the magistrate may dispense with the consultation and thereafter put that letter on record.
      `,
      steps: [

      ]
    },
    {
      id:5,
      section: `
      After satisfying himself or herself that prima facie the commission of an offence has been disclosed and that the complaint is not 
      frivolous or vexatious, the magistrate shall draw up and shall sign a formal charge containing a statement of the offence or offences 
      alleged to have been committed by the accused.
      `,
      steps: [

      ]
    },
    {
      id:6,
      section: 'Where a charge has been',
      steps: [
        {
          step1: 'laid under the provisions of subsection (1)(b); or',
          step2:`
          drawn up under the provisions of subsection (5), the magistrate shall issue either a summons or a warrant, as he or she shall deem fit,
           to compel the attendance of the accused person before the court over which he or she presides, or if the offence alleged appears to 
           be one which the magistrate is not empowered to try or inquire into, before a competent court having jurisdiction; except that a warrant 
           shall not be issued in the first instance unless the charge is supported by evidence on oath, either oral or by affidavit.
          `
        }
      ]
    },
    {
      id:7,
      section: `
      Notwithstanding subsection (6), a magistrate receiving any charge or complaint may, if he or she thinks fit for reasons to be recorded in writing, 
      postpone the issuing of a summons or warrant and may direct an investigation, or further investigation, to be made by the police into that charge 
      or complaint; and a police officer receiving such a direction shall investigate or further investigate the charge or complaint and report to the 
      court issuing the direction.`,
      steps: [

      ]
    },
    {
      id: 8,
      section: `
      Without prejudice to section 13 of the Criminal Procedure Code Act, nothing in subsection (6) shall authorise a police officer to make an arrest 
      without a warrant for an offence other than a cognisable offence.
      `,
      steps: [

      ]
    },
    {
      id:9,
      section: `
       A summons or warrant may be issued on a Sunday.
      `,
      steps: [

      ]
    },
    {
      id: 10,
      section: 'Nothing in this section shall be so construed as to affect the powers conferred upon justices of the peace by the Justices of the Peace Act.',
      steps:[

      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.page.html',
  styleUrls: ['./civil.page.scss'],
})
export class CivilPage implements OnInit {

  civilCaseProcedures: Array<any> = [
    {
      id: 1,
      step: 'The Plaint',
      description: `
      The person who institutes a law suit is called a plaintiff while the party against 
      whom the law suit is instituted is called a defendant. Before a lawsuit is instituted, 
      a person is required to give a Notice of Intention to Sue to the other party. 
      A law suit may be instituted by filing a Plaint in the court registry. 
      A plaint is a document stating the plaintiff's claim against the defendant and 
      what he/she wishes court to do for him/her.
      `
    },
    {
      id:2,
      step:'Accompanying Documents to the Plaint',
      description: `
      The plaint must be supported by a Summary of Evidence, list of documents, witnesses
       and authorities that the plaintiff intends to rely on. The plaint should also be 
       accompanied by a Mediation Case Summary. When filing the plaint, the requisite 
       filing fees (UGX 1,500 - UGX 3,000)  must be paid in the bank and evidence of 
       payment (bank deposit slip)  attached to the plaint.
      `
    },
    {
      id:3,
      step: 'The Summons',
      description: `
      Plaintiff then extracts a Summons from court requiring the defendant to either file a 
      defence or appear in court on a day specified therein and serves it together with the 
      plaint on the defendant within 21 days after court issues the summons. Once the summons
      is served on the defendant, the plaintiff must file an Affidavit of Service of Summons
      in court clearly stating how he/she served it on the defendant. The defendant in this 
      case may defend themselves. (see How to defend a law suit).
       
      `
    },
    {
      id:4,
      step: 'The Mediation',
      description: `
      Court will within 14 days after filing of the court documents is complete; notify 
      the parties of the commencement of mediation by way of a notice. The mediation is 
      required to be completed within 60 days after the mediator commences mediation. 
      If the mediation is successful/unsuccessful, then the mediator makes a report to 
      that effect. 
      `
    },
    {
      id:5,
      step: 'Scheduling Conference',
      section: `
      Where mediation is not successful, the case proceeds to a scheduling conference where
      the parties agree on the issues to be resolved in court. Here the plaintiff and defendant
      can opt to file a Joint Scheduling Memorandum. After the scheduling conference, the 
      plaintiff then sets down the case for hearing by giving a Hearing Notice to the defendant.

      In situations where the defendant fails to file a defence within the 15 days, then the plaintiff may set down the suit for hearing exparte 
      where court will only hear the plaintiff's case.
      `
    },
    {
      id:6,
      step: 'The Hearing',
      description: `
      At the hearing, the court will receive evidence from the plaintiff in respect to his 
      claim and the defendant in respect to his defence. After hearing from both parties or 
      from only the plaintiff where the defendant does not file a defence, court will go 
      ahead to give judgement.
      `
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

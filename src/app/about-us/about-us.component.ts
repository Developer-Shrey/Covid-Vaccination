import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  CandidateName = "";

  CandidateData:any = [
     
    // {
    //   CandidateName : "Shreyash", 
    // },


    // {
    //   CandidateName : "Akshay", 
    // },

    // {
    //   CandidateName : "Rajesh", 
    // }
                    ]

    //  Inside modal code

    Editclickhuakya = false;

    addCandidateName(){
     
      let obj = {
        CandidateName : this.CandidateName
      }
      this.CandidateData.push(obj);
      this.Clear();
    }               
     
     Clear(){
     this.CandidateName = ""; 
     }

    CandidateData1:any= []

    Delete1(i:any) {
      this.CandidateData.splice(i,1)
    }

     Dose1(i:any){
         
      this.CandidateData1.push(this.CandidateData[i])    
      this.CandidateData.splice(i,1)
     }

     CandidateData2:any = []
     
     Dose2(i:any){
      this.CandidateData2.push(this.CandidateData1[i])
      this.CandidateData1.splice(i,1)
    
       }


       Undo1(i:any) {
        this.CandidateData.push(this.CandidateData1[i]);
        this.CandidateData1.splice(i,1)
       }  


       Undo2(i:any) {
        this.CandidateData1.push(this.CandidateData2[i]);
        this.CandidateData2.splice(i,1)
       }  

}

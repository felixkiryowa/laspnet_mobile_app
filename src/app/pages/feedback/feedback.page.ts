import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {


  feedBackForm: FormGroup;
  showVideo: boolean=false;
  showAudio: boolean=false;
  submitButton: boolean=true;

  constructor(
    private formBuilder: FormBuilder,
    private mediaCapture: MediaCapture,
    private transfer: FileTransfer
  ) {

    this.feedBackForm = this.formBuilder.group({
      'subject': ['',  Validators.compose([Validators.required])],
      'names': ['', Validators.compose([Validators.required])],
      'location': ['', Validators.compose([Validators.required])],
      'phoneContact': ['', Validators.compose([Validators.required])]
    });
   }

  ngOnInit() {
  }

  // Function to get feedback type
  getFeedBackType(event:any) {
    const { value } = event.detail;
    if(parseInt(value) === 2){
      this.showVideo = true;
      this.showAudio = false;
      this.submitButton = false;
    }else if(parseInt(value) === 3){
      this.showAudio = true;
      this.showVideo = false;
      this.submitButton = false;
    }else {
      this.showAudio = false;
      this.showVideo = false;
      this.submitButton = true;
    }
  }

  // Function to add feedback
  addFeedBack(){
    // Add loading
    console.log('FEEDBACK', this.feedBackForm.value);
  }

  // Function to record a video and save it
  recordVideo() {
    // Add loading
    const { subject, names, location, phoneContact } = this.feedBackForm.value;
    console.log('VIDEO......', this.feedBackForm.value);
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.mediaCapture.captureVideo({
      limit:1,
      duration:20,
      quality:0
    }).then(
      (data: MediaFile[]) => {
        const uri = 'url to upload the video for saving';
        const fileURL = data[0].fullPath;
        let options: FileUploadOptions = {
          fileKey: 'file',
          fileName: data[0].name,
          chunkedMode: false,
          mimeType: 'video/mp4',
          httpMethod: 'POST',
          headers: {
            Connection: 'close'
          },
          params: {
            subject: subject,
            names: names,
            location: location,
            phoneContact: phoneContact
          }
        };
        fileTransfer.upload(fileURL, uri, options, true).then(data => {
          // Dismiss loader

        }, err => {
          // Dismiss loader
        })
      }
    )
  }


  // Function to record an audio and save it
  recordAudio() {
    // Add loading

    const { subject, names, location, phoneContact } = this.feedBackForm.value;
    console.log('AUDIO......', this.feedBackForm.value);
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.mediaCapture.captureVideo({
      limit:1,
      duration:20,
      quality:0
    }).then(
      (data: MediaFile[]) => {
        const uri = 'url to upload the video for saving';
        const fileURL = data[0].fullPath;
        let options: FileUploadOptions = {
          fileKey: 'file',
          fileName: data[0].name,
          chunkedMode: false,
          mimeType: 'audio/wav',
          httpMethod: 'POST',
          headers: {
            Connection: 'close'
          },
          params: {
            subject: subject,
            names: names,
            location: location,
            phoneContact: phoneContact
          }
        };
        fileTransfer.upload(fileURL, uri, options, true).then(data => {
          // Dismiss loader

        }, err => {
          // Dismiss loader
        })
      }
    )

  }

}

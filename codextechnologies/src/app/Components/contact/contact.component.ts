import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import  emailjs  from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactform !:FormGroup;
  meassage ="hello";

constructor(private fb: FormBuilder,private router:Router){}
ngOnInit(): void {

  this.contactform = this.fb.group({
    name:['',Validators.required],
    phone:['',Validators.required],
    emailId:['',Validators.required],
    timeapt:['',Validators.required],
    description:['',Validators.required],
    

  })
}


async onsubmit(value:any)
{   

  var namefiled = this.contactform.value.name;
  var emailIdfield = this.contactform.value.emailId;
  var descriptionfield = this.contactform.value.description;
  var phonefield = this.contactform.value.phone; 
  if(namefiled =="" ||  emailIdfield =="" || descriptionfield =="" || namefiled == "")
  {
    alert('Please Fill out all the details')
  }
   else
   {
    console.log(value);
    emailjs.init('3e4Uqd2hiO58SBWw1')
   let   response =await emailjs.send("service_g5zr37g","template_cwso6k8",{
    name: this.contactform.value.name,
    emailId:  this.contactform.value.emailId,
    phone: this.contactform.value.phone,
    description:  this.contactform.value.description,
    });
    
    this.contactform.reset();
   alert('Submitted Succefully');
   this.route();
 
}
  
}
route()
{
this.router.navigate(['/home']);    
}

}

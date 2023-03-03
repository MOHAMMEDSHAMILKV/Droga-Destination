import { Component } from '@angular/core';
import {faFacebook,faTwitter,faGoogle,faInstagram,faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons'
import {faHome,faEnvelope,faPhone,faPrint,faPlane} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faGoogle=faGoogle;
  faInstagram=faInstagram;
  faLinkedin=faLinkedin;
  faGithub=faGithub;

  faHome=faHome;
  faEnvelope=faEnvelope;
  faPhone=faPhone;
  faPrint=faPrint;
  faPlane=faPlane;
}

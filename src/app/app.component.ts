import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedContact: { name: string };
  title = 'Angular on Fire Chat';

  contacts: { name: string }[] = [
    { name: 'Jon' },
    { name: 'Rob' },
    { name: 'Ed' },
    { name: 'Ivan' }
  ];

  contactName = '';

  selectContact(contact) {
    this.selectedContact = contact;
  }

  isSelected(contact) {
    return this.selectedContact == contact;
  }

  addContact() {
    this.contacts.push({
      name: this.contactName
    });
    this.contactName = '';
  }
}

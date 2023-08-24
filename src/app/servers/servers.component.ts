import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import {FormsModule} from '@angular/forms'

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  serverName = '';
  userName = '';
  allowNewName = false;
  servers = ["Server 1", "server 2"];
  diplayButtonClicked = false;
  displayButtonClickCounter = [0];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }
  ngOnInit(): void {
    
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server '+this.serverName+' was created!';
  }
  onUpdateServerName(event: any){
      this.serverName = event.target.value;
  }
  onUpdateUserName(event: any){
    this.userName = event.target.value;
    this.allowNewName = true;
  }
  onClearUserName(){
    this.userName = '';
  }
  onDisplayClick(){
    this.diplayButtonClicked = !this.diplayButtonClicked;
    this.displayButtonClickCounter.push(this.displayButtonClickCounter.length);
    
  }
}

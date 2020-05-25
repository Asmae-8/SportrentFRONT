import { Component, OnInit } from '@angular/core';
import {CaddyService} from "../services/caddy.service";
import {Router} from "@angular/router";
import {Client} from "../model/client.model";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public mode: number = 0;
  panelStyle: string = "panel-default";

  constructor(
              // private authService:AuthenticationService,
              public caddyService: CaddyService,
              private router: Router) {
  }

  ngOnInit() {
  }




}

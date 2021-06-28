import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from '../../../models/team';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-teamuser',
  templateUrl: './teamuser.component.html',
  styleUrls: ['./teamuser.component.css']
})
export class TeamuserComponent implements OnInit {
listTeam: Team[];
  constructor(
    public service: TeamService
  ) { }

  ngOnInit(): void {
      this.service.getTeam().then((data) => (this.listTeam = data));
  }

}

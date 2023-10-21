import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  onSearchValue = '';
  onSearch() {
    if (!this.onSearchValue) { return }
    console.log("HEY", this.onSearchValue);

    const data = this.hospitalList.filter((x: any) => {
      return x.name.toLowerCase().trim() === this.onSearchValue.toLowerCase().trim()
    })
    console.log(data)
  this.hospitalList = data;
  }

  currentHospital:any ={};
  constructor(private http: HttpClient,
    private router:Router,


    ) {


  }
  currentId ='';
  getHospitalList() {
    this.http.get('assets/hospitallist.json').subscribe((res) => {
      this.hospitalList = res;
      this.currentHospital = this.hospitalList.filter((x:any)=>x.id==this.currentId)[0];
    })
  }

  onReset() {
    this.getHospitalList();
  }

  hospitalList: any = [];
  ngOnInit() {
    this.getHospitalList();
  }

  onView(hospital:any){
    this.router.navigate(['/hospital/'+hospital.id])
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewhospital',
  templateUrl: './viewhospital.component.html',
  styleUrls: ['./viewhospital.component.css']
})
export class ViewhospitalComponent {
  onSearchValue = '';
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router:Router) {

    // console.log(  this.activatedRoute.snapshot.params['id'])
    this.currentId = this.activatedRoute.snapshot.params['id'];
  }
  currentHospital: any;
  currentId: string = '1';
  hospitalList: any = [];
  getDataList() {
    this.http.get('assets/doctors.json').subscribe((res) => {
      this.dataList = res;
    })
    this.http.get('assets/hospitallist.json').subscribe((res) => {
      this.hospitalList = res;
      this.currentHospital = this.hospitalList.filter((x: any) => x.id == this.currentId)[0];
    })
  }
  onBook(item:any){
    console.log(item);
    if(item){
      // item['hospitalName']=this.currentHospital?.name;
      let body = {
        ...item,
        hospitalname :this.currentHospital.name
      }
    this.router.navigate(['/bookappointment',body]);
    }
    // item['hospitalName']=this.currentHospital?.name;
    // this.router.navigate(['/bookappointment',item]);
  }

  onReset() {
    this.getDataList();
  }

  dataList: any = [];
  ngOnInit() {
    this.getDataList();
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Company } from '../model'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {
  private companyUrl = 'http://52.37.146.59/company/'
  constructor (private http: Http) {}
  
  getCompany(): Observable<Company[]> {
    return this.http.get(this.companyUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addCompany(data:any):Observable<Company>{
    console.log(data);
    let headers = new Headers({'Content-Type': 'application/json'});
    let option = new RequestOptions({ headers: headers });

    return this.http.post(this.companyUrl, data, option)
    .map((res:Response) => res.json())
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}

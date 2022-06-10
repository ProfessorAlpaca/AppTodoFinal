import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  adicionaTarefa(tarefa: string, realizada: any){
    const url = 'http://localhost/ApiTodo/api.php';

    const param = { tarefa:tarefa, realida:realizada};

    return this.http.post(url,param).toPromise();
  }

  listaTarefa(){
    const url = 'http://localhost/ApiTodo/api.php';

    return this.http.get(url).toPromise();
  }

  excluirTarefa(id: any){
    const url ='http://localhost/ApiTodo/api.php?id='+id;

    return this.http.delete(url).toPromise();
  }
}



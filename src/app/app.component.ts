import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from "@angular/common"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	contacto: FormGroup;
	submitted = false;
	title = 'Validar Formulario con Angular 10';
	ahora: any;
	deshabilitar: any;
	fingreso: string;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
        this.contacto = this.formBuilder.group({
            nya: ['', Validators.required],            
            email: ['', [Validators.required, Validators.email]],
            asunto: ['', Validators.required],
			fingreso: ['', Validators.required],
			fegreso: ['', Validators.required],
            postre: ['', Validators.required],
            mensaje: ['', [Validators.required, Validators.minLength(6)]]
        });
		const datePipe = new DatePipe('en-Us')
     	this.ahora = datePipe.transform(new Date(), 'yyyy-MM-dd')
    }

	dateChanged() {
		console.log(this.fingreso)
		this.deshabilitar = this.fingreso
	}

	get f() {return this.contacto.controls; }

	onSubmit() {
		this.submitted = true;

		if(this.contacto.invalid) {
			return
		}

		alert('Mensaje Enviado !')

	}

}

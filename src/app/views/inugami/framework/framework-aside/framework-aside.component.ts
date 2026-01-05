import { Component, inject, OnInit, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'framework-aside',
    templateUrl: './framework-aside.component.html',
    styleUrls: ['./framework-aside.component.scss'],
    imports: [
        RouterLink,
        RouterLinkActive
    ]
})
export class FrameworkAsideComponent implements OnInit {
    private router = inject(ActivatedRoute);

    protected gettingStarted: WritableSignal<boolean> = signal<boolean>(false);
    protected exceptionManagement: WritableSignal<boolean> = signal<boolean>(false);

    ngOnInit(): void {
        const currentUrl = this.router.url
            .subscribe({
                next: path => {
                    this.initFilters(path[0].path);
                }
            });

    }
    initFilters(path: string) {
        console.log('path', path)
        switch (path) {
            case 'getting-started':
                this.gettingStarted.set(true);
                break;
            case 'exception':
                this.exceptionManagement.set(true);
                break;
        }
    }

}
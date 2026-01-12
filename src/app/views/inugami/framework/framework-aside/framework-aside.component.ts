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
    protected functional: WritableSignal<boolean> = signal<boolean>(false);
    protected monitoring: WritableSignal<boolean> = signal<boolean>(false);
    protected testability: WritableSignal<boolean> = signal<boolean>(false);
    protected tools: WritableSignal<boolean> = signal<boolean>(false);

    ngOnInit(): void {
        this.router.url
            .subscribe({
                next: path => {
                    this.initFilters(path[0].path);
                }
            });

    }
    initFilters(path: string): void {

        switch (path) {
            case 'getting-started':
                this.gettingStarted.set(true);
                break;
            case 'exception':
                this.exceptionManagement.set(true);
                break;
            case 'functional':
                this.functional.set(true);
                break;
            case 'monitoring':
                this.monitoring.set(true);
                break;
            case 'testability':
                this.testability.set(true);
                break;
            case 'tools':
                this.tools.set(true);
                break;
        }
    }

}
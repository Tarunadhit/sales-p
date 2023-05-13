import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ThemeService {
    constructor() {
        this.colorschemesOptions = new BehaviorSubject(undefined);
    }
    setColorschemesOptions(options) {
        this.pColorschemesOptions = options;
        this.colorschemesOptions.next(options);
    }
    getColorschemesOptions() {
        return this.pColorschemesOptions;
    }
}
ThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ThemeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi1jaGFydHMvc3JjL2xpYi90aGVtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFNdkMsTUFBTSxPQUFPLFlBQVk7SUFJdkI7UUFGTyx3QkFBbUIsR0FBOEMsSUFBSSxlQUFlLENBQTJCLFNBQVMsQ0FBQyxDQUFDO0lBR2pJLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxPQUFzQztRQUMzRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDOzswR0FkVSxZQUFZOzhHQUFaLFlBQVksY0FGWCxNQUFNOzRGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGFydENvbmZpZ3VyYXRpb24sIENoYXJ0T3B0aW9ucyB9IGZyb20gJ2NoYXJ0LmpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBwQ29sb3JzY2hlbWVzT3B0aW9ucz86IENoYXJ0T3B0aW9ucztcbiAgcHVibGljIGNvbG9yc2NoZW1lc09wdGlvbnM6IEJlaGF2aW9yU3ViamVjdDxDaGFydE9wdGlvbnMgfCB1bmRlZmluZWQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaGFydE9wdGlvbnMgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBzZXRDb2xvcnNjaGVtZXNPcHRpb25zKG9wdGlvbnM6IENoYXJ0Q29uZmlndXJhdGlvblsnb3B0aW9ucyddKTogdm9pZCB7XG4gICAgdGhpcy5wQ29sb3JzY2hlbWVzT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5jb2xvcnNjaGVtZXNPcHRpb25zLm5leHQob3B0aW9ucyk7XG4gIH1cblxuICBnZXRDb2xvcnNjaGVtZXNPcHRpb25zKCk6IENoYXJ0Q29uZmlndXJhdGlvblsnb3B0aW9ucyddIHtcbiAgICByZXR1cm4gdGhpcy5wQ29sb3JzY2hlbWVzT3B0aW9ucztcbiAgfVxufVxuIl19
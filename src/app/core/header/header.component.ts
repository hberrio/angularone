import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SideNavHeaderCommunicationService } from "../services/side-nav-header-communication.service";
//import { AuthService } from "../services/auth.service";
//import { GetCartCounterService } from "../services/get-cart-counter.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  cartItemsCount: any;
  rotateIcon!: boolean;
  count!: number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sideNavHeaderCommunicationService: SideNavHeaderCommunicationService,
    //public authService: AuthService,
    //private getCartCounterService: GetCartCounterService
  ) { }

  ngOnInit(): void {
    this.sideNavHeaderCommunicationService.count.subscribe(c => {
      this.count = c;
    });
    //this.getCartCounterService.count.subscribe(c => { this.cartItemsCount = c }
    //);
    //this.getCartCount();
  }
  nextCount() {
    this.sideNavHeaderCommunicationService.nextCount();
  }
  getCartCount() {
    //this.getCartCounterService.getCartCount();
  }

}

import { Routes, RouterModule } from "@angular/router";
import { MovieSelectionComponent } from "./store/movieSelection.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutDetailsComponent } from "./store/checkout/checkoutDetails.component";
import { CheckoutPaymentComponent } from "./store/checkout/checkoutPayment.component";
import { CheckoutSummaryComponent } from "./store/checkout/checkoutSummary.component";
import { OrderConfirmationComponent } from "./store/checkout/orderConfirmation.component";
import { AdminComponent } from "./admin/admin.component";
import { OverviewComponent } from "./admin/overview.component";
import { MovieAdminComponent } from "./admin/movieAdmin.component";
import { OrderAdminComponent } from "./admin/orderAdmin.component";


const routes: Routes = [
    {
        path: "admin", component: AdminComponent,
        children: [
            { path: "movies", component: MovieAdminComponent },
            { path: "orders", component: OrderAdminComponent },
            { path: "overview", component: OverviewComponent },
            { path: "", component: OverviewComponent }
        ]
    },
    { path: "checkout/step1", component: CheckoutDetailsComponent },
    { path: "checkout/step2", component: CheckoutPaymentComponent },
    { path: "checkout/step3", component: CheckoutSummaryComponent },
    { path: "checkout/confirmation", component: OrderConfirmationComponent },
    { path: "checkout", component: CheckoutDetailsComponent },
    { path: "cart", component: CartDetailComponent },
    { path: "store", component: MovieSelectionComponent  },
    { path: "", component: MovieSelectionComponent  }]
   
export const RoutingConfig = RouterModule.forRoot(routes);
   
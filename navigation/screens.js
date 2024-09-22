import ChildComponent from "../components/ChildComponent";
import {
  Help,
  Home,
  Bookings,
  Account,
  SignIn,
  SearchBuses,
  Passenger,
  OTPPage,
  EditProfile,
  SelectSeat,
  ConfirmationPage,
  ReferAndEarn,
  Wallet,
  Cards,
  UpdateEmail,
} from "../pages";
import AboutUs from "../pages/AboutUs";
import BookingForWomen from "../pages/BookingForWomen";
import Offers from "../pages/Offers";
import Settings from "../pages/Settings";

import BottomTabNavigator from "./BottomTabNavigator";

export const bottomTabScreens = [
  {
    name: "Home",
    icon: "home",
    component: Home,
  },
  {
    name: "Bookings",
    icon: "ticket",
    component: Bookings,
  },
  {
    name: "Help",
    icon: "trail-sign",
    component: Help,
  },
  {
    name: "Account",
    icon: "person",
    component: Account,
  },
];

export const stackScreens = [
  {
    name: "SignIn",
    component: SignIn,
    options: {
      headerShown: false,
    },
  },
  {
    name: "verification",
    component: OTPPage,
    options: {
      headerShown: false,
    },
  },
  {
    name: "Main",
    component: BottomTabNavigator,
    options: {
      headerShown: false,
    },
  },
  {
    name: "selectSeat",
    component: SelectSeat,
    options: {
      headerShown: true,
      title: "Select Seat(s)",
    },
  },
  {
    name: "AddPassenger",
    component: Passenger,
    options: {
      headerShown: true,
      title: "Passenger Details",
    },
  },
  {
    name: "editProfile",
    component: EditProfile,
    options: {
      headerShown: true,
      title: "Edit Profile",
    },
  },
  {
    name: "ChildrenDetails",
    component: ChildComponent,
    options: {
      headerShown: true,
      title: "Children Details",
    },
  },
  // {
  //   name: "Payment",
  //   component: Payment,
  //   options: {
  //     headerShown: true,
  //     title: "Payment Details",
  //   },
  // },
  {
    name: "SearchBus",
    component: SearchBuses,
    options: {
      headerShown: true,
      title: "Search Results",
    },
  },
  {
    name: "ConfirmationPage",
    component: ConfirmationPage,
    options: {
      headerShown: true,
      title: "Confirmation Page",
    },
  },
  {
    name: "Wallet",
    component: Wallet,
    options: {
      headerShown: true,
      title: "Wallet",
    },
  },
  {
    name: "BookingForWomen",
    component: BookingForWomen,
    options: {
      headerShown: true,
      title: "Booking For Women",
    },
  },
  {
    name: "ReferAndEarn",
    component: ReferAndEarn,
    options: {
      headerShown: true,
      title: "Refer And Earn",
    },
  },
  {
    name: "Cards",
    component: Cards,
    options: {
      headerShown: true,
      title: "Cards",
    },
  },
  {
    name: "Offers",
    component: Offers,
    options: {
      headerShown: true,
      title: "Offers",
    },
  },
  {
    name: "UpdateEmail",
    component: UpdateEmail,
    options: {
      headerShown: true,
      title: "Update Email",
    },
  },
  {
    name: "AboutUs",
    component: AboutUs,
    options: {
      headerShown: true,
      title: "About Us",
    },
  },
  {
    name: "Settings",
    component: Settings,
    options: {
      headerShown: true,
      title: "Settings",
    },
  },
];

<template>
  <h1 class="text-center display-5">Check out</h1>

  <div v-if="items?.length > 0" class="section-wrapper">
    <!-- progress -->
    <section class="container">
      <div
        class="progress mt-4"
        role="progressbar"
        aria-label="checkout progress"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar bg-info w-30"
          :class="
            step == 1
              ? 'w-33'
              : step == 2
              ? 'w-66'
              : step == 3
              ? 'w-99'
              : 'w-30'
          "
        ></div>
      </div>
      <div class="row text-center text-secondary-emphasis">
        <span class="col-4" :class="step >= 1 ? 'text-info' : 'text-secondary'"
          >1. CART ITEMS</span
        >
        <span class="col-4" :class="step >= 2 ? 'text-info' : 'text-secondary'"
          >2. INFORMATION</span
        >
        <span class="col-4" :class="step == 3 ? 'text-info' : 'text-secondary'"
          >3. CONFIRM</span
        >
      </div>
    </section>
    <!-- section 1: cart items & shipping options -->
    <section class="container mt-5" :class="step == 1 ? 'd-block' : 'd-none'">
      <h2 class="my-4 fs-3">
        Shopping Cart ({{ items.length }}
        {{ items.length > 1 ? "items" : "item" }})
      </h2>
      <!-- checkout items -->
      <div class="container border border-1 border-info-subtle rounded-2">
        <div
          class="table-header d-none d-md-flex py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2 fw-bold"
        >
          <span class="col-3">product</span>
          <span class="col-3">price (€)</span>
          <span class="col-3">quantity</span>
          <span class="col-3">subtotal (€)</span>
        </div>
        <div class="table-body">
          <CheckoutItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            :step="step"
          />
        </div>
      </div>

      <div class="d-flex-column d-md-flex gap-4">
        <!-- shipping options and payment -->
        <div
          class="my-4 container border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Shipping & Payment</span>
          </div>
          <div class="table-body p-2">
            <div class="mb-2">
              <label for="shipping-des" class="mb-1"
                >Shipping destination</label
              >
              <select
                class="form-select"
                name="shipping-des"
                id="shipping-des"
                v-model="shippingDes"
              >
                <option value="Nebelland">Nebelland</option>
                <option value="Flance">Flance</option>
                <option value="USK">USK</option>
              </select>
            </div>
            <div class="my-2">
              <label for="shipping-method" class="mb-1">Shipping method</label>
              <select
                class="form-select"
                name="shipping-method"
                id="shipping-method"
                v-model="shippingMethod"
              >
                <option
                  value="DHL Post"
                  v-show="shippingDes == 'Nebelland' || shippingDes == 'Flance'"
                >
                  DHL Post
                </option>
                <option value="Ups">UPS</option>
                <option value="Store" v-show="shippingDes == 'Nebelland'">
                  Pick up at store
                </option>
              </select>
            </div>
            <div class="my-2">
              <label for="payment" class="mb-1">Payment method</label>
              <select
                class="form-select"
                name="payment"
                id="payment"
                v-model="payMethod"
              >
                <option value="Credit card">Credit Card (VISA / Master)</option>
                <option value="Invoice">Invoice</option>
              </select>
            </div>
          </div>
        </div>
        <!-- billing information -->
        <div
          class="my-4 container border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Billing information</span>
          </div>
          <div class="table-body p-2">
            <div class="row mb-2">
              <p class="col-12 col-sm-6">Cart Items In Total:</p>
              <p class="col-12 col-sm-6 text-end">
                {{ getCartItemsTotal() }} €
              </p>
            </div>
            <div class="row my-2">
              <p class="col-12 col-sm-6">Shipping Fee:</p>
              <p class="col-12 col-sm-6 text-end">{{ calcShippingFee() }} €</p>
            </div>
            <div class="row my-2">
              <p class="col-12 col-sm-6">Total:</p>
              <p class="col-12 col-sm-6 text-end">{{ calcTotal() }} €</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- section 2: information forms -->
    <section class="container mt-5" :class="step == 2 ? 'd-block' : 'd-none'">
      <h2 class="my-4 fs-3">Please fill out</h2>
      <div class="d-flex-column d-md-flex gap-4 align-items-start">
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Order person</span>
          </div>
          <form>
            <!-- order name -->
            <div class="mb-3 row">
              <div class="col-12 col-md-6">
                <label for="order-firstname" class="form-label"
                  >First Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  :class="{ warning: !orderFirstname.trim() && !checked }"
                  id="order-firstname"
                  aria-describedby="nameHelp"
                  v-model="orderFirstname"
                />
                <div id="nameHelp" class="form-text">
                  Please enter your real name.
                </div>
              </div>
              <div class="col-12 col-md-6">
                <label for="order-lastname" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{ warning: !orderLastname.trim() && !checked }"
                  id="order-lastname"
                  v-model="orderLastname"
                />
              </div>
            </div>

            <!-- order email -->
            <div class="mb-3">
              <label for="order-email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                :class="{ warning: !orderEmail.trim() && !checked }"
                id="order-email"
                v-model="orderEmail"
              />
            </div>
            <!-- order subscribe newsletter -->
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="newsletter-check"
              />
              <label
                class="form-check-label text-muted fst-italic"
                for="newsletter-check"
                >I'd like to receive vie-updates and seasonal offers newsletter
                regularly.</label
              >
            </div>
            <!-- order phone -->
            <div class="mb-3 w-50">
              <label for="order-phone" class="form-label">Phone number</label>
              <input
                type="tel"
                class="form-control"
                id="order-phone"
                v-model="orderPhone"
              />
            </div>
            <!-- order birthday -->
            <div class="row">
              <span class="form-label">Birthday</span>
              <div class="col-12 col-sm-4 mb-3">
                <select
                  id="birth-year"
                  class="form-select form-select-sm"
                  aria-label="birth-year"
                >
                  <option selected>YEAR</option>
                  <option :value="year" v-for="year in birthYears">
                    {{ year }}
                  </option>
                </select>
              </div>
              <div class="col-12 col-sm-4 mb-3">
                <select
                  id="birthdy-mon"
                  class="form-select form-select-sm"
                  aria-label="birth-month"
                >
                  <option selected>MON</option>
                  <option :value="month" v-for="month in months">
                    {{ month }}
                  </option>
                </select>
              </div>
              <div class="col-12 col-sm-4 mb-3">
                <select
                  id="birthdy-day"
                  class="form-select form-select-sm"
                  aria-label="birth-day"
                >
                  <option selected>DAY</option>
                  <option :value="day" v-for="day in birthDays">
                    {{ day }}
                  </option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Shipping address</span>
          </div>
          <div class="mb-3">
            <span> Shipping method: </span>
            <span class="fw-bold text-warning">{{ shippingMethod }}</span
            ><br />

            <span class="lh-sm text-info text-end fst-italic">{{
              shippingMethod == "DHL Post"
                ? " | standard DHL shipping 4-7 workdays | "
                : shippingMethod == "Ups"
                ? " | premium UPS service 2-3 workdays | "
                : " | regular disptach 3-4 workdays | "
            }}</span>
          </div>

          <form v-if="shippingMethod !== 'Store'">
            <!-- recipient same as order person -->
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="recipient-check"
                v-model="orderShippingSame"
              />
              <label class="form-check-label text-dark" for="recipient-check"
                >Recipient same as order person.</label
              >
            </div>

            <!-- recipient name -->
            <div class="mb-3 row">
              <div class="col-12 col-md-6">
                <label for="recipient-firstname" class="form-label"
                  >First Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  :class="{ warning: !shippingFirstname.trim() && !checked }"
                  id="recipient-firstname"
                  v-model="shippingFirstname"
                />
              </div>
              <div class="col-12 col-md-6">
                <label for="recipient-lastname" class="form-label"
                  >Last Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  :class="{ warning: !shippingLastname.trim() && !checked }"
                  id="recipient-lastname"
                  v-model="shippingLastname"
                />
              </div>
            </div>

            <!-- receiver address -->
            <div class="mb-3 row">
              <div class="col-12 col-lg-7">
                <label for="receiver-street" class="form-label"
                  >Street, No.</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="receiver-street"
                  :class="{ warning: !shippingSt.trim() && !checked }"
                  v-model="shippingSt"
                />
              </div>
              <div class="col-12 col-lg-5">
                <label for="receiver-city" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="receiver-city"
                  :class="{ warning: !shippingCity.trim() && !checked }"
                  v-model="shippingCity"
                />
              </div>
            </div>

            <div class="mb-3 row">
              <div class="col-6 col-lg-4">
                <label for="receiver-zip" class="form-label"> ZIP code</label>
                <input
                  type="number"
                  class="form-control"
                  id="receiver-zip"
                  v-model="shippingZip"
                />
              </div>
              <div class="col-6 col-lg-4">
                <p>Country</p>
                <span class="text-black-50">{{ shippingDes }}</span>
              </div>
            </div>

            <!-- receiver phone -->
            <div class="mb-3 w-50">
              <label for="receiver-phone" class="form-label"
                >Phone number</label
              >
              <input
                type="telephone"
                class="form-control"
                id="receiver-phone"
                v-model="shippingPhone"
              />
            </div>
          </form>

          <div v-if="shippingMethod === 'Store'" class="mb-3">
            <p class="lh-base">
              {{ shippingSt }}<br />
              {{ shippingZip }} {{ shippingCity }}<br />
              {{ shippingDes }}
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex-column d-md-flex gap-4 align-items-start">
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Payment information</span>
          </div>
          <p>
            Payment method:
            <span class="fw-bold text-warning">{{ payMethod }}</span>
          </p>
          <!-- invoice information -->
          <form v-if="payMethod == 'Invoice'" aria-describedby="invoiceHelp">
            <!-- billing address -->
            <p>Invoice address</p>
            <p class="fw-bold">{{ orderFirstname }} {{ orderLastname }}</p>
            <div class="mb-3 row">
              <div class="col-12 col-lg-7">
                <label for="payer-street" class="form-label">Street, No.</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{ warning: !payerStr.trim() && !checked }"
                  id="payer-street"
                  v-model="payerStr"
                />
              </div>
              <div class="col-12 col-lg-5">
                <label for="payer-city" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{ warning: !payerCity.trim() && !checked }"
                  id="payer-city"
                  v-model="payerCity"
                />
              </div>
            </div>

            <div class="mb-3 row">
              <div class="col-6 col-lg-5">
                <label for="payer-zip" class="form-label">ZIP code</label>
                <input
                  type="number"
                  class="form-control"
                  id="payer-zip"
                  v-model="payerZip"
                />
              </div>
              <div class="col-6 col-lg-5">
                <label for="payer-country" class="form-label">Country</label>
                <input
                  type="text"
                  class="form-control"
                  :class="{ warning: !payerCountry.trim() && !checked }"
                  id="payer-country"
                  v-model="payerCountry"
                />
              </div>
            </div>
            <div id="invoiceHelp" class="mb-3 form-text">
              Invoice will be issued after all ordered items have been
              delivered.
            </div>
          </form>
        </div>
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Note</span>
          </div>
          <form>
            <!-- card information -->
            <div class="mb-3">
              <div class="">
                <label for="order-message" class="form-label"
                  >Message to
                  <span class="text-primary-emphasis">verdant vie</span></label
                >
                <textarea
                  type="text"
                  class="form-control"
                  id="order-message"
                  placeholder="Anything else you want to tell us?"
                  v-model="message"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- section 3: confirm -->
    <section class="container mt-5" :class="step == 3 ? 'd-block' : 'd-none'">
      <h2 class="my-4 fs-3">Order overview</h2>
      <div class="d-flex-column d-md-flex gap-4 align-items-start">
        <!-- customer -->
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Order person</span>
          </div>
          <div>
            <ul>
              <li>{{ orderFirstname }} {{ orderLastname }}</li>
              <li>{{ orderEmail }}</li>
              <li>{{ orderPhone }}</li>
            </ul>
          </div>
        </div>
        <!-- shipping -->
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Shipping address</span>
          </div>

          <div>
            <ul>
              <li>{{ shippingFirstname }} {{ shippingLastname }}</li>
              <li>
                {{ shippingSt }} <br />
                {{ shippingZip }}, {{ shippingCity }} <br />{{ shippingDes }}
              </li>
              <li>{{ shippingPhone }}</li>
            </ul>
          </div>
        </div>
        <!-- message -->
        <div
          v-show="message"
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Note</span>
          </div>

          <!-- card information -->
          <div class="mb-3">
            <div class="">
              <span>Your message:</span>
              {{ message }}
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex-column d-md-flex gap-4 align-items-start">
        <!-- order items -->
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Order items</span>
          </div>
          <CheckoutItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            :step="step"
          />
        </div>
        <!-- fees -->
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2 bg-body-tertiary"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Fees</span>
          </div>

          <div class="d-flex justify-content-start gap-3">
            <span>Order Items Total</span>
            <span class="text-end">{{ getCartItemsTotal() }} €</span>
          </div>
          <div>
            <div class="d-flex justify-content-start gap-3">
              <span>Shipping Fee</span>
              <span
                >{{ calcShippingFee() > 0 ? calcShippingFee() : "free" }}
                {{ calcShippingFee() > 0 ? "€" : "" }}</span
              >
            </div>
          </div>
          <hr />

          <div
            class="d-flex justify-content-end gap-3 mb-3 fw-bolder text-primary-emphasis"
          >
            <span>Total</span>
            <span>{{ calcTotal() }} €</span>
          </div>
        </div>
      </div>

      <!-- pay with credit card -->
      <div
        v-if="payMethod == 'Credit card'"
        class="d-flex-column d-md-flex gap-4 align-items-start"
      >
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2 bg-body-tertiary"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Credit card</span>
          </div>
          <form class="row">
            <div class="col-lg-6 mb-3 row">
              <div class="col-12 col-xl-6">
                <label for="card-number" class="form-label">Card number</label>
                <input
                  type="tel"
                  class="form-control"
                  :class="{ warning: !cardNum.trim() && !checked }"
                  id="card-number"
                  inputmode="numeric"
                  pattern="[0-9 ]+"
                  autocomplete="cc-number"
                  maxlength="16"
                  v-model="cardNum"
                />
              </div>
              <div class="col-12 col-xl-6">
                <label for="card-name" class="form-label"
                  >Card Holder Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  :class="{ warning: !cardName.trim() && !checked }"
                  id="card-name"
                  v-model="cardName"
                />
              </div>
            </div>
            <div class="col-lg-6 mb-3 row">
              <div class="col-3 col-lg-3 pe-0">
                <label for="card-valid-month" class="form-label"
                  >Valid Til</label
                >
                <select
                  class="form-select form-select-sm"
                  :class="{ warning: !cardMon.trim() && !checked }"
                  aria-label="valid-month"
                  id="card-valid-month"
                  v-model="cardMon"
                >
                  <option selected>MM</option>
                  <option :value="month" v-for="month in months">
                    {{ month }}
                  </option>
                </select>
              </div>
              <div class="col-3 col-lg-3 pe-0">
                <label
                  for="card-valid-year"
                  class="form-label opacity-0 text-nowrap"
                  >Valid til year</label
                >
                <input
                  type="tel"
                  maxlength="2"
                  class="form-control form-control-sm"
                  :class="{ warning: !cardYear.trim() && !checked }"
                  id="card-valid-year"
                  placeholder="YY"
                  v-model="cardYear"
                />
              </div>
              <div class="col-6 col-lg-3">
                <label for="card-security" class="form-label">CVV/CVC</label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  :class="{ warning: !cardCvv.trim() && !checked }"
                  id="card-security"
                  name="card-security"
                  maxlength="3"
                  pattern="([0-9]|[0-9]|[0-9])"
                  v-model="cardCvv"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <!-- pay with invoice -->
      <div
        v-if="payMethod == 'Invoice'"
        class="w-50 d-flex-column d-md-flex gap-4 align-items-start"
      >
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2 bg-body-tertiary"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span class="fw-bold">Invoice to</span>
          </div>
          <ul class="mb-3">
            <li>{{ orderFirstname }} {{ orderLastname }}</li>
            <li>{{ payerStr }}</li>
            <li>{{ payerZip }} {{ payerCity }}</li>
            <li>{{ payerCountry }}</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="container my-3 d-flex w-100 justify-content-end gap-2">
      <button
        class="btn btn-outline-primary z-2"
        @click="lastStep"
        v-show="step !== 1"
      >
        Back
      </button>
      <button class="btn btn-primary text-success" @click="nextStep">
        <span v-if="step < 3">Continue</span>
        <span v-if="step == 3" class="fw-bold">Order</span>
      </button>
    </div>
  </div>
  <!-- if cart if empty -->
  <h3 v-else class="fs-4 my-6 text-center text-secondary">
    Your shopping cart is empty.
  </h3>
</template>

<script>
import { ref, watch } from "vue";
import CheckoutItem from "../components/CheckoutItem.vue";
import useShoppingCart from "../composables/useShoppingCart";
import { useRouter } from "vue-router";

export default {
  name: "Checkout",
  components: { CheckoutItem },
  setup() {
    const router = useRouter();
    // cart items info
    const {
      currentItems: items,
      cartItemsCount,
      getCartItemsTotal,
    } = useShoppingCart();

    // shipping & payment
    const shippingDes = ref("Nebelland");
    const shippingMethod = ref("Store");
    const payMethod = ref("Credit card");

    // order information
    const orderFirstname = ref("");
    const orderLastname = ref("");
    const orderEmail = ref("");
    const orderPhone = ref("");
    const orderShippingSame = ref(false);
    const shippingFirstname = ref("");
    const shippingLastname = ref("");
    const shippingSt = ref("Verdant Street 17");
    const shippingCity = ref("New Silbermond City");
    const shippingZip = ref(80000);
    const shippingPhone = ref("");
    const payerStr = ref("");
    const payerCity = ref("");
    const payerZip = ref("");
    const payerCountry = ref("");
    const message = ref("");
    const birthYears = ref(
      Array(80)
        .fill(0)
        .map((_, i) => new Date().getFullYear() - 18 - i)
    );
    const months = ref(
      Array(12)
        .fill("0")
        .map((ele, i) => ele.concat(i + 1).slice(-2))
    );
    const birthDays = ref(
      Array(31)
        .fill("0")
        .map((ele, i) => ele.concat(i + 1).slice(-2))
    );

    // credit card
    const cardNum = ref("");
    const cardName = ref("");
    const cardMon = ref("");
    const cardYear = ref("");
    const cardCvv = ref("");

    // form check
    const checked = ref(true);

    // stepper
    const step = ref(1);

    /*  == SECTION 1 == */
    // default shipping method setter
    function setShipping(des) {
      switch (des) {
        case "Nebelland":
          shippingMethod.value = "Store";
          return;
        case "Flance":
          shippingMethod.value = "DHL Post";
          return;
        case "USK":
          shippingMethod.value = "Ups";
          return;
      }
    }
    // watch shipping destination
    watch(shippingDes, (newDes) => {
      setShipping(newDes);
    });

    // calculate shipping fee
    function calcShippingFee() {
      if (shippingDes.value === "Nebelland") {
        switch (shippingMethod.value) {
          case "DHL Post":
          case "Store":
            return 0.0;
          case "Ups":
            return 3.99;
          default:
            return 0.0;
        }
      } else if (shippingDes.value === "Flance") {
        switch (shippingMethod.value) {
          case "DHL Post":
            return 1.0;
          case "Ups":
            return 4.5;
          default:
            return 1.0;
        }
      } else if (shippingDes.value === "USK") {
        return 5.5;
      } else {
        return 0;
      }
    }

    // calculate total fee
    function calcTotal() {
      const result = +getCartItemsTotal() + +calcShippingFee();
      return result.toFixed(2);
    }

    /*  == SECTION 2 == */
    // when recipient name same as order person name
    watch(orderShippingSame, () => {
      if (orderShippingSame.value) {
        shippingFirstname.value = orderFirstname.value;
        shippingLastname.value = orderLastname.value;
      }
    });
    // when sent to store
    watch(
      shippingMethod,
      (newMethod) => {
        if (newMethod === "Store") {
          shippingSt.value = "Verdant Street 17";
          shippingCity.value = "New Silbermond City";
        } else {
          shippingSt.value = "";
          shippingCity.value = "";
        }
      },
      { deep: true }
    );

    // when order names change
    watch(orderFirstname, () => {
      if (shippingMethod.value === "Store") {
        shippingFirstname.value = orderFirstname.value;
      }
    });
    watch(orderLastname, () => {
      if (shippingMethod.value === "Store") {
        shippingLastname.value = orderLastname.value;
      }
    });

    // check required fields
    function checkInfoFields() {
      if (
        !orderFirstname.value.trim() ||
        !orderLastname.value.trim() ||
        !orderEmail.value.trim() ||
        !shippingFirstname.value.trim() ||
        !shippingLastname.value.trim() ||
        !shippingSt.value.trim() ||
        !shippingCity.value.trim()
      ) {
        checked.value = false;
        return false;
      } else {
        // if required fields all filled
        if (payMethod.value === "Invoice") {
          // - pay with invoice
          if (
            !payerStr.value.trim() ||
            !payerCity.value.trim() ||
            !payerCountry.value.trim()
          ) {
            checked.value = false;
            return false;
          } else {
            checked.value = true;
            return true;
          }
        } else {
          // - does not pay with invoice
          checked.value = true;
          return true;
        }
      }
    }

    /*  == SECTION 3 == */
    // check required fields
    function checkCreditCard() {
      // if does not pay with credit card
      if (payMethod.value === "Invoice") {
        checked.value = true;
        return true;
      }
      // if pay with credit card
      if (payMethod.value === "Credit card") {
        if (
          !cardNum.value.trim() ||
          !cardName.value.trim() ||
          !cardMon.value.trim() ||
          !cardYear.value.trim() ||
          !cardCvv.value.trim()
        ) {
          checked.value = false;
          return false;
        } else {
          checked.value = true;
          return true;
        }
      }
    }

    /*  == STEPPER CONTROL == */
    function nextStep() {
      if (step.value === 1) {
        step.value++;
      } else if (step.value === 2) {
        if (checkInfoFields()) {
          step.value++;
        }
      } else if (step.value === 3) {
        if (checkCreditCard()) {
          router.push({ name: "thank-you" });
        }
      }
      window.scrollTo(0, 0);
    }

    function lastStep() {
      if (step.value > 1) {
        step.value--;
      } else {
        return;
      }
    }

    return {
      items,
      cartItemsCount,
      getCartItemsTotal,
      step,
      nextStep,
      lastStep,
      shippingMethod,
      shippingDes,
      payMethod,
      calcShippingFee,
      calcTotal,
      birthYears,
      months,
      birthDays,
      orderFirstname,
      orderLastname,
      orderEmail,
      orderPhone,
      orderShippingSame,
      shippingFirstname,
      shippingLastname,
      shippingSt,
      shippingCity,
      shippingZip,
      shippingPhone,
      payerStr,
      payerCity,
      payerZip,
      payerCountry,
      cardNum,
      cardName,
      cardMon,
      cardYear,
      cardCvv,
      message,
      checkInfoFields,
      checked,
    };
  },
};
</script>

<style scoped>
ul {
  padding-left: 0;
  list-style: none;
}
.warning {
  border-width: 2px;
  border-color: var(--danger);
}
</style>

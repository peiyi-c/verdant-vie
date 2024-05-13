<template>
  <h1 class="text-center">Check out</h1>

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
          class="table-header d-none d-md-flex py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
        >
          <span class="col-3">product</span>
          <span class="col-3">price (€)</span>
          <span class="col-3">quantity</span>
          <span class="col-3">subtotal (€)</span>
        </div>
        <div class="table-body">
          <CheckoutItem v-for="item in items" :key="item.id" :item="item" />
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
            <span>shipping & payment</span>
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
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div class="my-2">
              <label for="shipping-des" class="mb-1">Shipping method</label>
              <select
                class="form-select"
                name="shipping-des"
                id="shipping-des"
                v-model="shippingVendor"
              >
                <option
                  value="dhl"
                  v-show="shippingDes == 'Germany' || shippingDes == 'France'"
                >
                  DHL Post
                </option>
                <option value="ups">UPS</option>
                <option value="store" v-show="shippingDes == 'Germany'">
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
                <option value="credit-card">Credit Card (VISA / Master)</option>
                <option value="invoice">Invoice</option>
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
            <span class="">billing information</span>
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
      <h2 class="my-4 fs-3">Please fill out the following information</h2>
      <div class="d-flex-column d-md-flex gap-4 align-items-start">
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span>Order person</span>
          </div>
          <form>
            <!-- customer name -->
            <div class="mb-3 row">
              <div class="col-12 col-md-6">
                <label for="customer-firstname" class="form-label"
                  >First Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="customer-firstname"
                  aria-describedby="nameHelp"
                />
                <div id="nameHelp" class="form-text">
                  Please enter your real name.
                </div>
              </div>
              <div class="col-12 col-md-6">
                <label for="customer-lastname" class="form-label"
                  >Last Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="customer-lastname"
                />
              </div>
            </div>

            <!-- customer email -->
            <div class="mb-3">
              <label for="customer-email" class="form-label"
                >Email address</label
              >
              <input type="email" class="form-control" id="customer-email" />
            </div>
            <!-- customer subscribe newsletter -->
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="newsletter-check"
              />
              <label class="form-check-label text-muted" for="newsletter-check"
                >I'd like to receive updates on verdant vie and seasonal offers
                regularly.</label
              >
            </div>
            <!-- customer phone -->
            <div class="mb-3 w-50">
              <label for="customer-phone" class="form-label"
                >Phone number</label
              >
              <input
                type="telephone"
                class="form-control"
                id="customer-phone"
              />
            </div>
            <!-- customer birthday -->
            <div class="row">
              <span class="form-label">Birthday</span>
              <div class="col-12 col-sm-4 mb-3">
                <select class="form-select form-select-sm" aria-label="year">
                  <option selected>YEAR</option>
                  <option :value="year" v-for="year in birthYears">
                    {{ year }}
                  </option>
                </select>
              </div>
              <div class="col-12 col-sm-4 mb-3">
                <select class="form-select form-select-sm" aria-label="month">
                  <option selected>MONTH</option>
                  <option :value="month" v-for="month in birthMonths">
                    {{ month }}
                  </option>
                </select>
              </div>
              <div class="col-12 col-sm-4 mb-3">
                <select class="form-select form-select-sm" aria-label="day">
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
            <span>Shipping address</span>
          </div>
          <form>
            <!-- recipient same as order person -->
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="recipient-check"
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
                  id="recipient-firstname"
                  aria-describedby="nameHelp"
                />
              </div>
              <div class="col-12 col-md-6">
                <label for="recipient-lastname" class="form-label"
                  >Last Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-lastname"
                />
              </div>
            </div>

            <!-- receiver address -->
            <div class="mb-3 row">
              <div class="col-12 col-lg-7">
                <label for="receiver-street" class="form-label"
                  >Street, No.</label
                >
                <input type="text" class="form-control" id="receiver-street" />
              </div>
              <div class="col-12 col-lg-5">
                <label for="receiver-city" class="form-label">City</label>
                <input type="text" class="form-control" id="receiver-city" />
              </div>
            </div>

            <div class="mb-3 row">
              <div class="col-6 col-lg-4">
                <label for="receiver-zip" class="form-label"> ZIP code</label>
                <input type="number" class="form-control" id="receiver-zip" />
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
              />
            </div>
          </form>
        </div>
      </div>
      <div class="d-flex-column d-md-flex gap-4 align-items-start">
        <div
          class="container my-4 border border-1 border-info-subtle rounded-2"
        >
          <div
            class="table-header py-2 mb-3 row text-center text-info bg-body-tertiary rounded-2 border-bottom border-info-subtle rounded-2"
          >
            <span>Payment information</span>
          </div>
          <form>
            <!-- card information -->
            <div class="mb-3 row">
              <div class="col-12 col-xl-6">
                <label for="card-number" class="form-label">Card number</label>
                <input type="text" class="form-control" id="card-number" />
              </div>
              <div class="col-12 col-xl-6">
                <label for="card-name" class="form-label"
                  >Card Holder Name</label
                >
                <input type="text" class="form-control" id="card-name" />
              </div>
            </div>
            <div class="mb-3 row">
              <div class="col-6 col-lg-6">
                <label for="card-valid" class="form-label">Valid date</label>
                <input type="number" class="form-control" id="card-valid" />
              </div>
              <div class="col-6 col-lg-6">
                <label for="card-security" class="form-label">CVV/CVC</label>
                <input type="number" class="form-control" id="card-security" />
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
            <span>Note</span>
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
        {{ step == 3 ? "Order" : "Continue" }}
      </button>
    </div>
  </div>
  <h3 v-else class="fs-4 my-6 text-center text-secondary">
    Your shopping cart is empty.
  </h3>
</template>

<script>
import { ref } from "vue";
import CheckoutItem from "../components/CheckoutItem.vue";
import useShoppingCart from "../composables/useShoppingCart";

export default {
  name: "Checkout",
  components: { CheckoutItem },
  setup() {
    // cart items info
    const {
      currentItems: items,
      cartItemsCount,
      getCartItemsTotal,
    } = useShoppingCart();

    // shipping & payment
    const shippingDes = ref("Germany");
    const shippingVendor = ref("dhl");
    const payMethod = ref("credit-card");
    // customer information
    const birthYears = ref(
      Array(80)
        .fill(0)
        .map((_, i) => new Date().getFullYear() - 18 - i)
    );
    const birthMonths = ref(
      Array(12)
        .fill(0)
        .map((_, i) => i + 1)
    );
    const birthDays = ref(
      Array(31)
        .fill(0)
        .map((_, i) => i + 1)
    );

    // stepper
    const step = ref(1);
    function nextStep() {
      if (step.value < 3) {
        step.value++;
      } else {
        return;
      }
    }
    function lastStep() {
      if (step.value > 1) {
        step.value--;
      } else {
        return;
      }
    }
    // calculate shipping fee
    function calcShippingFee() {
      if (shippingDes.value === "Germany") {
        switch (shippingVendor.value) {
          case "dhl":
          case "store":
            return 0.0;
          case "ups":
            return 3.99;
          default:
            return 0.0;
        }
      } else if (shippingDes.value === "France") {
        switch (shippingVendor.value) {
          case "dhl":
            return 1.0;
          case "ups":
            return 4.5;
          default:
            return 1.0;
        }
      } else {
        // shippingDes.value === "UK"
        return 5.5;
      }
    }

    // calculate total fee
    function calcTotal() {
      const result = +getCartItemsTotal() + +calcShippingFee();
      return result.toFixed(2);
    }

    return {
      items,
      cartItemsCount,
      getCartItemsTotal,
      step,
      nextStep,
      lastStep,
      shippingVendor,
      shippingDes,
      payMethod,
      calcShippingFee,
      calcTotal,
      birthYears,
      birthMonths,
      birthDays,
    };
  },
};
</script>

<style></style>

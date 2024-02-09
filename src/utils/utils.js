export const generateInvoices = (items) => {
  const invoices = [];
  let uninvoicedItems = [];
  let ongoingInvoice = null;
  

  invoiceGenerator(items);
  return invoices
  
  function invoiceGenerator(items) {
    items.forEach((item) => {
      if (item.priceWithVat >= 500) {
        for (let i = 0; i < item.quantity; i++) {
          invoices.push({
            id: invoices.indexOf +1,
            items: [{
              ...item,
              quantity: 1,
            }],
            totalPrice: item.priceWithVat,
            subTotalPrice: item.price - item.discount,
          });
        }
        return;
      }

      if (!ongoingInvoice || ongoingInvoice.totalPrice >= 500) {
        ongoingInvoice = {
          id: invoices.indexOf +1,
          items: [],
          totalPrice: 0,
          subTotalPrice: 0,
        };
        
      }
      addItemsInInvoice(item);
    });

    if (ongoingInvoice && ongoingInvoice.items.length > 0) {
      invoices.push({ ...ongoingInvoice });
      ongoingInvoice = null;
    }

    if (uninvoicedItems.length > 0) {
      const newItems = [...uninvoicedItems];
      uninvoicedItems = [];
      invoiceGenerator(newItems);
    }
  }

  function addItemsInInvoice(item) {
    for (let i = 0; i < item.quantity; i++) {
      if (ongoingInvoice.totalPrice + item.priceWithVat < 500) {
        const findItem = ongoingInvoice.items.find((invoiceItem) => invoiceItem.id === item.id);

        if (checkIfItemHigherThan50(findItem)) {
          continue;
        }

        if (findItem) {
          findItem.quantity += 1;
        } else {
          ongoingInvoice.items.push({
            ...item,
            quantity: 1,
          });
        }

        ongoingInvoice.totalPrice += parseFloat(item.priceWithVat);
        ongoingInvoice.subTotalPrice += parseFloat(item.price - item.discount);
      } else {
        invoices.push(ongoingInvoice);
        ongoingInvoice = {
          id: invoices.indexOf +1,
          items: [{
            ...item,
            quantity: 1,
          }],
          totalPrice: parseFloat(item.priceWithVat),
          subTotalPrice: parseFloat(item.price - item.discount),
        };
        
      }
    }
  }

  

  function checkIfItemHigherThan50(foundItem) {
    if (foundItem && foundItem.quantity >= 50) {
      const findUninvoicedItem = uninvoicedItems.find((uninvoicedItem) => uninvoicedItem.id === foundItem.id);

      if (findUninvoicedItem) {
        findUninvoicedItem.quantity += 1;
      } else {
        uninvoicedItems.push({
          ...foundItem,
          quantity:1,
        });
      }
      return true;
    } else {
      return false;
    }
  }
};
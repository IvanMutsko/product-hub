import { fetchProductById } from "../../../lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ params }) {
  const id = params.id;

  const productData = await fetchProductById(id);

  if (!productData) {
    notFound();
  }

  return (
    <main>
      <h1>{productData.name}</h1>
      <Image
        src={productData.image}
        width={800}
        height={800}
        alt={productData.name}
      />
      <p>Виробник: {productData.tradeMark}</p>
      <p>Країна: {productData.country}</p>
      <p>Дата створення картки: {productData.createCardData}</p>

      <div>
        <p>{productData.barCode}</p>

        <table border="1">
          <tr>
            <th>Характеристика</th>
            <th>Значення</th>
          </tr>
          <tr>
            <td colspan="2">Штука</td>
          </tr>
          <tr>
            <td>Висота, см</td>
            <td>{productData.characteristics.thing.height}</td>
          </tr>
          <tr>
            <td>Глибина, см</td>
            <td>{productData.characteristics.thing.length}</td>
          </tr>
          <tr>
            <td>Ширина, см</td>
            <td>{productData.characteristics.thing.width}</td>
          </tr>
          <tr>
            <td>Вага брутто, кг</td>
            <td>{productData.characteristics.thing.grossWeight}</td>
          </tr>
        </table>
      </div>

      <div>
        <table border="1">
          <tr>
            <td colspan="2">
              Коробка {productData.characteristics.box.quantity}шт
            </td>
          </tr>
          <tr>
            <td>Висота, см</td>
            <td>{productData.characteristics.box.height}</td>
          </tr>
          <tr>
            <td>Глибина, см</td>
            <td>{productData.characteristics.box.length}</td>
          </tr>
          <tr>
            <td>Ширина, см</td>
            <td>{productData.characteristics.box.width}</td>
          </tr>
          <tr>
            <td>Вага брутто, кг</td>
            <td>{productData.characteristics.box.grossWeight}</td>
          </tr>
        </table>
      </div>

      <div>
        <table border="1">
          <tr>
            <td colspan="2">Палета</td>
          </tr>
          <tr>
            <td>Коробок в шарі</td>
            <td>{productData.characteristics.pallet.boxesInLayer}</td>
          </tr>
          <tr>
            <td>Шарів</td>
            <td>{productData.characteristics.pallet.layersOnPallet}</td>
          </tr>
          <tr>
            <td>Тип піддона</td>
            <td>{productData.characteristics.pallet.palletType}</td>
          </tr>
        </table>
      </div>

      <div>
        <p>Поживні характеристики</p>
        <table border="1">
          <tr>
            <td>Жири, г/100г</td>
            <td>{productData.nutritionInformation.fat}</td>
          </tr>
          <tr>
            <td>Білки, г/100г</td>
            <td>{productData.nutritionInformation.protein}</td>
          </tr>
          <tr>
            <td>Вуглеводи, г/100г</td>
            <td>{productData.nutritionInformation.carbohydrates}</td>
          </tr>
          <tr>
            <td>Цукор, г/100г</td>
            <td>{productData.nutritionInformation.sugar}</td>
          </tr>
          <tr>
            <td>Калорійність, кДж/100г</td>
            <td>{productData.nutritionInformation.energykJ}</td>
          </tr>
          <tr>
            <td>Калорійність, ккал/100г</td>
            <td>{productData.nutritionInformation.energykcal}</td>
          </tr>
          <tr>
            <td>Сіль, г/100г</td>
            <td>{productData.nutritionInformation.salt}</td>
          </tr>
          <tr>
            <td>Насичені жири, г/100г</td>
            <td>{productData.nutritionInformation.saturatedFat}</td>
          </tr>
        </table>
      </div>
    </main>
  );
}

import { useFormik } from 'formik';
import React, { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared/ui/Button/Button';
import { NumberFormField } from '../../../shared/ui/FormField/NumberFormField';
import { TextFormField } from '../../../shared/ui/FormField/TextFormField';
import { isNotDefinedString, isValidFileType } from '../../../utils/validation';
import { ProductFormErrors, ProductFormValues } from '../types/ProductFormTypes';
import { TextAreaFormField } from '../../../shared/ui/FormField/TextAreaFormField';
import { categories } from '../../../entities/Category/Const/CategoryConst';
import { Uploader } from '../../../shared/ui/FormField/UploadFormField';
import { UploadFile } from 'antd';
import { SelectFormField } from '../../../shared/ui/FormField/SelectFormField';

export const ProductForm: FC = () => {
  const { t } = useTranslation();

  const validate = (values: ProductFormValues) => {
    const errors = {} as ProductFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = t(`Errors.is_required`);
    }

    if (values.price == undefined || Number(values.price) <= 0) {
      errors.price = t(`Errors.number_is_lower_then_zero`);
    }

    if (isNotDefinedString(values.category)) {
      errors.category = t(`Errors.is_required`);
    }

    if (values.photo == undefined) {
      errors.photoErrors = t(`Errors.is_required`);
    } else if (values.photo && !isValidFileType(values.photo, 'image/png')) {
      errors.photoErrors = t(`Errors.need_image_file`);
    }

    return errors;
  };

  const formManager = useFormik<ProductFormValues>({
    initialValues: {
      name: undefined,
      price: undefined,
      oldPrice: undefined,
      desc: undefined,
      photo: undefined,
      photoErrors: undefined,
      photoTouched: undefined,
      category: undefined,
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
    validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  const options: { value: string; label: string }[] = [];
  categories.map((values) => {
    options.push({ value: values.id, label: values.name });
  });

  const beforeUpload = (photo: UploadFile) => {
    formManager.setFieldValue('photo', photo);
    return true;
  };

  const onFilechange = (file: any) => {
    if (file.file.status == 'removed') {
      formManager.setFieldValue('photo', undefined);
    }
  };

  return (
    <form>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.name}
        touched={touched.name}
        name="name"
        value={values.name}
        placeholder={t(`Forms.ProductForm.Name.title`)}
        title={t(`Forms.ProductForm.Name.placeholder`)}
      />

      <TextAreaFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.desc}
        touched={touched.desc}
        name="desc"
        value={values.desc}
        placeholder={t(`Forms.ProductForm.Description.title`)}
        title={t(`Forms.ProductForm.Description.placeholder`)}
      />

      <NumberFormField
        onBlur={handleBlur}
        onChange={(value) => {
          formManager.setFieldValue('price', value);
        }}
        submitCount={submitCount}
        errors={errors.price}
        touched={touched.price}
        name="price"
        value={values.price}
        placeholder={t(`Forms.ProductForm.Price.title`)}
        title={t(`Forms.ProductForm.Price.placeholder`)}
      />

      <NumberFormField
        onBlur={handleBlur}
        onChange={(value) => {
          formManager.setFieldValue('oldPrice', value);
        }}
        submitCount={submitCount}
        errors={errors.oldPrice}
        touched={touched.oldPrice}
        name="oldPrice"
        value={values.oldPrice}
        placeholder={t(`Forms.ProductForm.OldPrice.title`)}
        title={t(`Forms.ProductForm.OldPrice.placeholder`)}
      />

      <SelectFormField
        onBlur={handleBlur}
        onChange={(value: ChangeEvent<any>) => {
          formManager.setFieldValue('category', value);
        }}
        submitCount={submitCount}
        errors={errors.category}
        touched={touched.category}
        value={values.category}
        placeholder={t(`Forms.ProductForm.Category.title`)}
        title={t(`Forms.ProductForm.Category.placeholder`)}
        options={options}
      />

      <Uploader
        beforeUpload={beforeUpload}
        onChange={onFilechange}
        submitCount={submitCount}
        errors={errors.photoErrors}
        touched={touched.photoTouched}
        title="photo"
        fileList={values.photo != null ? [values.photo] : []}
      />

      <Button type="submit" style="primary" size="small" onClick={handleSubmit}>
        {t(`Forms.ProductForm.Button.title`)}
      </Button>
    </form>
  );
};

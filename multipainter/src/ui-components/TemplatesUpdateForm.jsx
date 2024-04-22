/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTemplates } from "../graphql/queries";
import { updateTemplates } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function TemplatesUpdateForm(props) {
  const {
    id: idProp,
    templates: templatesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    timeCreated: "",
    numGrid: [],
    colorGrid: [],
    artName: "",
    creator: "",
    creationMessage: "",
    tags: "",
  };
  const [timeCreated, setTimeCreated] = React.useState(
    initialValues.timeCreated
  );
  const [numGrid, setNumGrid] = React.useState(initialValues.numGrid);
  const [colorGrid, setColorGrid] = React.useState(initialValues.colorGrid);
  const [artName, setArtName] = React.useState(initialValues.artName);
  const [creator, setCreator] = React.useState(initialValues.creator);
  const [creationMessage, setCreationMessage] = React.useState(
    initialValues.creationMessage
  );
  const [tags, setTags] = React.useState(initialValues.tags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = templatesRecord
      ? { ...initialValues, ...templatesRecord }
      : initialValues;
    setTimeCreated(cleanValues.timeCreated);
    setNumGrid(cleanValues.numGrid ?? []);
    setCurrentNumGridValue("");
    setColorGrid(cleanValues.colorGrid ?? []);
    setCurrentColorGridValue("");
    setArtName(cleanValues.artName);
    setCreator(cleanValues.creator);
    setCreationMessage(cleanValues.creationMessage);
    setTags(cleanValues.tags);
    setErrors({});
  };
  const [templatesRecord, setTemplatesRecord] =
    React.useState(templatesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTemplates.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTemplates
        : templatesModelProp;
      setTemplatesRecord(record);
    };
    queryData();
  }, [idProp, templatesModelProp]);
  React.useEffect(resetStateValues, [templatesRecord]);
  const [currentNumGridValue, setCurrentNumGridValue] = React.useState("");
  const numGridRef = React.createRef();
  const [currentColorGridValue, setCurrentColorGridValue] = React.useState("");
  const colorGridRef = React.createRef();
  const validations = {
    timeCreated: [{ type: "Required" }],
    numGrid: [{ type: "Required" }],
    colorGrid: [{ type: "Required" }],
    artName: [{ type: "Required" }],
    creator: [{ type: "Required" }],
    creationMessage: [{ type: "Required" }],
    tags: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          timeCreated,
          numGrid,
          colorGrid,
          artName,
          creator,
          creationMessage,
          tags,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateTemplates.replaceAll("__typename", ""),
            variables: {
              input: {
                id: templatesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TemplatesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Time created"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={timeCreated && convertToLocal(new Date(timeCreated))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              timeCreated: value,
              numGrid,
              colorGrid,
              artName,
              creator,
              creationMessage,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.timeCreated ?? value;
          }
          if (errors.timeCreated?.hasError) {
            runValidationTasks("timeCreated", value);
          }
          setTimeCreated(value);
        }}
        onBlur={() => runValidationTasks("timeCreated", timeCreated)}
        errorMessage={errors.timeCreated?.errorMessage}
        hasError={errors.timeCreated?.hasError}
        {...getOverrideProps(overrides, "timeCreated")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              timeCreated,
              numGrid: values,
              colorGrid,
              artName,
              creator,
              creationMessage,
              tags,
            };
            const result = onChange(modelFields);
            values = result?.numGrid ?? values;
          }
          setNumGrid(values);
          setCurrentNumGridValue("");
        }}
        currentFieldValue={currentNumGridValue}
        label={"Num grid"}
        items={numGrid}
        hasError={errors?.numGrid?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("numGrid", currentNumGridValue)
        }
        errorMessage={errors?.numGrid?.errorMessage}
        setFieldValue={setCurrentNumGridValue}
        inputFieldRef={numGridRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Num grid"
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentNumGridValue}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (errors.numGrid?.hasError) {
              runValidationTasks("numGrid", value);
            }
            setCurrentNumGridValue(value);
          }}
          onBlur={() => runValidationTasks("numGrid", currentNumGridValue)}
          errorMessage={errors.numGrid?.errorMessage}
          hasError={errors.numGrid?.hasError}
          ref={numGridRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "numGrid")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              timeCreated,
              numGrid,
              colorGrid: values,
              artName,
              creator,
              creationMessage,
              tags,
            };
            const result = onChange(modelFields);
            values = result?.colorGrid ?? values;
          }
          setColorGrid(values);
          setCurrentColorGridValue("");
        }}
        currentFieldValue={currentColorGridValue}
        label={"Color grid"}
        items={colorGrid}
        hasError={errors?.colorGrid?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("colorGrid", currentColorGridValue)
        }
        errorMessage={errors?.colorGrid?.errorMessage}
        setFieldValue={setCurrentColorGridValue}
        inputFieldRef={colorGridRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Color grid"
          isRequired={true}
          isReadOnly={false}
          value={currentColorGridValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.colorGrid?.hasError) {
              runValidationTasks("colorGrid", value);
            }
            setCurrentColorGridValue(value);
          }}
          onBlur={() => runValidationTasks("colorGrid", currentColorGridValue)}
          errorMessage={errors.colorGrid?.errorMessage}
          hasError={errors.colorGrid?.hasError}
          ref={colorGridRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "colorGrid")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Art name"
        isRequired={true}
        isReadOnly={false}
        value={artName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeCreated,
              numGrid,
              colorGrid,
              artName: value,
              creator,
              creationMessage,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.artName ?? value;
          }
          if (errors.artName?.hasError) {
            runValidationTasks("artName", value);
          }
          setArtName(value);
        }}
        onBlur={() => runValidationTasks("artName", artName)}
        errorMessage={errors.artName?.errorMessage}
        hasError={errors.artName?.hasError}
        {...getOverrideProps(overrides, "artName")}
      ></TextField>
      <TextField
        label="Creator"
        isRequired={true}
        isReadOnly={false}
        value={creator}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeCreated,
              numGrid,
              colorGrid,
              artName,
              creator: value,
              creationMessage,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.creator ?? value;
          }
          if (errors.creator?.hasError) {
            runValidationTasks("creator", value);
          }
          setCreator(value);
        }}
        onBlur={() => runValidationTasks("creator", creator)}
        errorMessage={errors.creator?.errorMessage}
        hasError={errors.creator?.hasError}
        {...getOverrideProps(overrides, "creator")}
      ></TextField>
      <TextField
        label="Creation message"
        isRequired={true}
        isReadOnly={false}
        value={creationMessage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeCreated,
              numGrid,
              colorGrid,
              artName,
              creator,
              creationMessage: value,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.creationMessage ?? value;
          }
          if (errors.creationMessage?.hasError) {
            runValidationTasks("creationMessage", value);
          }
          setCreationMessage(value);
        }}
        onBlur={() => runValidationTasks("creationMessage", creationMessage)}
        errorMessage={errors.creationMessage?.errorMessage}
        hasError={errors.creationMessage?.hasError}
        {...getOverrideProps(overrides, "creationMessage")}
      ></TextField>
      <TextField
        label="Tags"
        isRequired={true}
        isReadOnly={false}
        value={tags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              timeCreated,
              numGrid,
              colorGrid,
              artName,
              creator,
              creationMessage,
              tags: value,
            };
            const result = onChange(modelFields);
            value = result?.tags ?? value;
          }
          if (errors.tags?.hasError) {
            runValidationTasks("tags", value);
          }
          setTags(value);
        }}
        onBlur={() => runValidationTasks("tags", tags)}
        errorMessage={errors.tags?.errorMessage}
        hasError={errors.tags?.hasError}
        {...getOverrideProps(overrides, "tags")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || templatesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || templatesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

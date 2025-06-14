import React, { useEffect, useState } from "react";
import InputField from "../../CreateYourVendor/common/InputField";
import SquareRadio from "../../CreateYourVendor/common/SquareRadio";
import FeeCalculation from "../../CreateYourVendor/common/FeeCalculation";
import Button from "../../../Authentication/regular_components/Button";

import SpinnerLoading from "../../../Authentication/regular_components/SpinnerLoading";
import TimePaker from "./TimePaker";
import appData from "../../../../config/appData";
import Menu from "../../CreateYourVendor/common/Menue";
import { useUpdatePoliciesMutation } from "../../../../services/HotelApi";

const PoliciesEdit = ({ data }) => {
  // console.log(data);

  const [fee, setFee] = useState(data.policies.cancellation_allowed);
  const [PoliciesToEdit, setPoliciesToEdit] = useState({});
  const [updatePolicies, { isLoading, error }] = useUpdatePoliciesMutation();

  const [selectedPetOption, setSelectedPetOption] = useState("");
  const [selectedSmokingOption, setSelectedSmokingOption] = useState("");

  // Initialize PoliciesToEdit with data when the component mounts or data changes
  useEffect(() => {
    if (data.policies) {
      setPoliciesToEdit({
        check_in: {
          from: {
            time: data.policies.check_in.from.time,
            date: data.policies.check_in.from.date,
          },
          until: {
            time: data.policies.check_in.until.time,
            date: data.policies.check_in.until.date,
          },
          description: data.policies.check_in.description || "",
        },
        check_out: {
          from: {
            time: data.policies.check_out.from.time,
            date: data.policies.check_out.from.date,
          },
          until: {
            time: data.policies.check_out.until.time,
            date: data.policies.check_out.until.date,
          },
          description: data.policies.check_out.description || "",
        },
        cancelation_policy: data.policies.cancelation_policy || "",
        cancellation_allowed: data.policies.cancellation_allowed,
        cancellation_fee_rule: data.policies.cancellation_fee_rule || {
          30: 0,
          14: 25,
          7: 50,
          3: 75,
          2: 100,
        },
        children_and_families: data.policies.children_and_families || "",
        smoking_policy: data.policies.smoking_policy || "",
        pet_policy: data.policies.pet_policy || "",
        payment_agreed_options: data.policies.payment_agreed_options || [
          { payment_method: "Paymob", payment_icon: "paymob_icon.jpg" },
        ],
      });
    }
  }, [data.policies]);

  const onChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setPoliciesToEdit({ ...PoliciesToEdit, [name]: value });
  };

  const id = data._id;

  const handleUpdatePolicies = async () => {
    try {
      // Parse check_in and check_out times

      const payload = {
        check_in: {
          from: {
            time: PoliciesToEdit.check_in.from.time,
            date: PoliciesToEdit.check_in.from.date,
          },
          until: {
            time: PoliciesToEdit.check_in.until.time,
            date: PoliciesToEdit.check_in.until.date,
          },
          ...(PoliciesToEdit.check_in.description?.trim() && {
            description: { en: PoliciesToEdit.check_in.description },
          }),
        },
        check_out: {
          from: {
            time: PoliciesToEdit.check_out.from.time,
            date: PoliciesToEdit.check_out.from.date,
          },
          until: {
            time: PoliciesToEdit.check_out.until.time,
            date: PoliciesToEdit.check_out.until.date,
          },
          ...(PoliciesToEdit.check_out.description?.trim() && {
            description: { en: PoliciesToEdit.check_out.description },
          }),
        },
        cancelation_policy: {
          en: PoliciesToEdit.cancelation_policy,
        },
        cancelation_allowed: PoliciesToEdit.cancellation_allowed,
        ...(fee && {
          cancelation_fee_rule: PoliciesToEdit.cancellation_fee_rule,
        }),
        children_and_families: {
          en: PoliciesToEdit.children_and_families,
        },
        smoking_policy: {
          en: selectedSmokingOption.label || PoliciesToEdit.smoking_policy,
        },
        pet_policy: {
          en: selectedPetOption.label || PoliciesToEdit.pet_policy,
        },
        payment_agreed_options: PoliciesToEdit.payment_agreed_options.map(
          (option) => ({
            payment_method: { en: option.payment_method },
            payment_icon: option.payment_icon,
          })
        ),
      };

      // console.log(payload);

      await updatePolicies({
        id: id,
        body: payload,
      }).unwrap();
      console.log("Policies updated successfully:", payload);
    } catch (err) {
      console.error("Failed to update policies:", err);
    }
  };
  const smokingPolicyOptions = appData.smokingPolicy.map((item) => ({
    value: item.value,
    label: item.policy,
  }));
  const petsPolicyOptions = appData.petsPolicy.map((item) => ({
    value: item.value,
    label: item.policy,
  }));

  return (
    <div className="mb-[30px]">
      <b className="text-[20px]">Property check in/out</b>
      <p className="mb-[-3px]">Check In</p>
      <div className="sm:flex gap-[10px]">
        <TimePaker
          TimePakerObject={(value) => {
            setPoliciesToEdit({
              ...PoliciesToEdit,
              check_in: { ...PoliciesToEdit.check_in, from: value },
            });
          }}
          label="from"
          value={
            `${PoliciesToEdit.check_in?.from.time} ${PoliciesToEdit.check_in?.from.date}` ||
            ""
          }
        />
        <TimePaker
          TimePakerObject={(value) => {
            setPoliciesToEdit({
              ...PoliciesToEdit,
              check_in: { ...PoliciesToEdit.check_in, until: value },
            });
          }}
          label="until"
          value={
            `${PoliciesToEdit.check_in?.until.time} ${PoliciesToEdit.check_in?.until.date}` ||
            ""
          }
        />
      </div>

      <InputField
        className="w-[98%] h-[60px] disabled:bg-[#4947470c]"
        label={"Description (optional)"}
        value={PoliciesToEdit.check_in?.description || ""}
        textarea={true}
        name="check_in_description"
        onChange={(e) => {
          setPoliciesToEdit({
            ...PoliciesToEdit,
            check_in: {
              ...PoliciesToEdit.check_in,
              description: e.target.value,
            },
          });
        }}
      />
      <p className="mb-[-3px]">Check Out</p>
      <div className="sm:flex gap-[10px]">
        <TimePaker
          TimePakerObject={(value) => {
            setPoliciesToEdit({
              ...PoliciesToEdit,
              check_out: { ...PoliciesToEdit.check_out, from: value },
            });
          }}
          label="from"
          value={
            `${PoliciesToEdit.check_out?.from.time} ${PoliciesToEdit.check_out?.from.date}` ||
            ""
          }
        />
        <TimePaker
          TimePakerObject={(value) => {
            setPoliciesToEdit({
              ...PoliciesToEdit,
              check_out: { ...PoliciesToEdit.check_out, until: value },
            });
          }}
          label="until"
          value={
            `${PoliciesToEdit.check_out?.until.time} ${PoliciesToEdit.check_out?.until.date}` ||
            ""
          }
        />
      </div>
      <InputField
        value={PoliciesToEdit.check_out?.description || ""}
        className="w-[98%] h-[60px] disabled:bg-[#4947470c] mt-[20px]"
        label={"Description (optional)"}
        textarea={true}
        name="check_out_description"
        onChange={(e) => {
          setPoliciesToEdit({
            ...PoliciesToEdit,
            check_out: {
              ...PoliciesToEdit.check_out,
              description: e.target.value,
            },
          });
        }}
      />

      <div className="mt-[20px]">
        <div className="mb-[40px]">
          <SquareRadio
            name="customRadio"
            options={[
              {
                value: "policy",
                label: "Cancellation Policy",
              },
            ]}
            cost={true}
            outoFeeInUpdate={fee}
            description="Cancellation Allowed"
            AllowanceHandling={(state) => {
              setFee(state["Cancellation Policy"]);
              setPoliciesToEdit({
                ...PoliciesToEdit,
                cancellation_allowed: state["Cancellation Policy"],
              });
            }}
          />
        </div>
        <InputField
          label={"Cancellation Policy"}
          value={PoliciesToEdit.cancelation_policy || ""}
          textarea
          className={"w-[97%]"}
          name="cancelation_policy"
          onChange={onChangeInputHandler}
        />
        <div className="mt-[30px]">
          {fee ? (
            <FeeCalculation
              disabledd={false}
              feeObjectHandeler={(fee) => {
                setPoliciesToEdit({
                  ...PoliciesToEdit,
                  cancellation_fee_rule: { ...fee },
                });
              }}
              editt={true}
              dataFee={data.policies.cancellation_fee_rule}
            />
          ) : null}

          <InputField
            label={"Children and Families"}
            value={PoliciesToEdit.children_and_families || ""}
            textarea
            className={"w-[97%]"}
            name="children_and_families"
            onChange={onChangeInputHandler}
          />
        </div>
        <div>
          <b className="mt-[100px]">Policies</b>
          <div className="flex gap-[15px]">
            <Menu
              label="Pets Policy"
              value={selectedPetOption}
              onChange={setSelectedPetOption}
              options={petsPolicyOptions}
              placeholder={PoliciesToEdit.pet_policy || ""}
              isSearchable={false}
            />

            <Menu
              label="moking Policy"
              value={selectedSmokingOption}
              onChange={setSelectedSmokingOption}
              options={smokingPolicyOptions}
              placeholder={PoliciesToEdit.smoking_policy || ""}
              isSearchable={false}
            />
          </div>
          <InputField
            className="w-[98%] h-[80px] disabled:bg-[#4947470c] mt-[20px]"
            disabled
            textarea={true}
            label={"Detailed Terms"}
            value={PoliciesToEdit.detailed_terms || ""}
            name="detailed_terms"
          />
        </div>
        <div></div>
      </div>
      {error && (
        <div className="text-red-500 text-sm">
          {error?.data?.message || "Failed to update property"}
        </div>
      )}
      <div className="flex justify-end mt-[10px]">
        {isLoading ? (
          <SpinnerLoading dimentians="h-4 w-4 text-[blue] ml-[130px] mt-[10px]" />
        ) : (
          <Button
            className="border-none rounded-[8px] mt-[-3px] h-[30px] w-[60px] bg-[blue] cursor-pointer text-white"
            type="button"
            name={
              <div className="flex gap-1 items-center">
                <span className="material-symbols-outlined text-[15px] mt-[-9px]">
                  edit
                </span>
                <p className="text-[15px] mt-[4px]">Edit</p>
              </div>
            }
            onClickAction={handleUpdatePolicies}
          />
        )}
      </div>
    </div>
  );
};

export default PoliciesEdit;

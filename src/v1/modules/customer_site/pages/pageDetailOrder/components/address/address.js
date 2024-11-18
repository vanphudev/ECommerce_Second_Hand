import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Modal, message } from "antd"; // Thư viện antd
import "./style.scss";

const Address = () => {
  const generateRandomAddress = () => {
    const names = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"];
    const phones = ["+84 123 456 789", "+84 987 654 321", "+84 555 666 777"];
    const addresses = [
      "123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh",
      "456 Đường DEF, Phường UVW, Quận 2, TP. Hà Nội",
      "789 Đường GHI, Phường RST, Quận 3, TP. Đà Nẵng",
    ];

    return {
      id: Math.floor(Math.random() * 1000),
      name: names[Math.floor(Math.random() * names.length)],
      phone: phones[Math.floor(Math.random() * phones.length)],
      address: addresses[Math.floor(Math.random() * addresses.length)],
    };
  };

  const [addresses, setAddresses] = useState([
    generateRandomAddress(),
    generateRandomAddress(),
    generateRandomAddress(),
  ]);

  const [isAdding, setIsAdding] = useState(false); // Trạng thái hiển thị form thêm/sửa địa chỉ
  const [currentAddress, setCurrentAddress] = useState(null); // Địa chỉ đang được sửa

  const handleAddNewAddress = () => {
    setCurrentAddress(null); // Không có địa chỉ đang sửa
    setIsAdding(true);
  };

  const handleEditAddress = (address) => {
    setCurrentAddress(address); // Gán địa chỉ hiện tại để sửa
    setIsAdding(true);
  };

  const handleClose = () => {
    setIsAdding(false);
  };

  const handleDeleteAddress = (id) => {
    Modal.confirm({
      title: "Xóa địa chỉ",
      content: "Bạn có chắc chắn muốn xóa địa chỉ này không?",
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk: () => {
        setAddresses(addresses.filter((address) => address.id !== id));
        message.success("Xóa địa chỉ thành công!");
      },
    });
  };

  const handleSaveAddress = () => {
    // Lưu hoặc cập nhật địa chỉ
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const addressDetails = document.getElementById("addressDetails").value;
    const addressLocation = document.getElementById("addressLocation").value;

    if (currentAddress) {
      // Cập nhật địa chỉ
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === currentAddress.id
            ? {
                ...addr,
                name,
                phone,
                address: `${addressLocation}, ${addressDetails}`,
              }
            : addr
        )
      );
      message.success("Cập nhật địa chỉ thành công!");
    } else {
      // Thêm mới địa chỉ
      const newAddress = {
        id: addresses.length + 1,
        name,
        phone,
        address: `${addressLocation}, ${addressDetails}`,
      };
      setAddresses([...addresses, newAddress]);
      message.success("Thêm địa chỉ thành công!");
    }
    setIsAdding(false);
  };

  return (
    <Box sx={{ padding: 4, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h6" gutterBottom>
        <p className="titleDiachi">
          <span>Địa chỉ của tôi</span>
        </p>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
        onClick={handleAddNewAddress}
      >
        + Thêm địa chỉ mới
      </Button>
      {addresses.map((address) => (
        <Box
          key={address.id}
          sx={{
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
            marginBottom: 2,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1">
              <strong>{address.name}</strong>
              <br />
              {address.phone}
              <br />
              <span>{address.address}</span>
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleEditAddress(address)}
              >
                Sửa
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="error"
                onClick={() => handleDeleteAddress(address.id)}
              >
                Xóa
              </Button>
            </Stack>
          </Stack>
        </Box>
      ))}

      {/* Dialog thêm/sửa địa chỉ */}
      <Dialog open={isAdding} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {currentAddress ? "Chỉnh sửa địa chỉ" : "Thêm địa chỉ mới"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              id="name"
              label="Họ và tên"
              defaultValue={currentAddress?.name || ""}
              fullWidth
            />
            <TextField
              id="phone"
              label="Số điện thoại"
              defaultValue={currentAddress?.phone || ""}
              fullWidth
            />
            <TextField
              id="addressLocation"
              label="Tỉnh/ Thành phố, Quận/ Huyện, Phường/ Xã"
              defaultValue={
                currentAddress
                  ? currentAddress.address.split(", ").slice(0, -1).join(", ")
                  : ""
              }
              fullWidth
            />
            <TextField
              id="addressDetails"
              label="Địa chỉ cụ thể"
              defaultValue={
                currentAddress
                  ? currentAddress.address.split(", ").slice(-1).join(", ")
                  : ""
              }
              fullWidth
            />
            <RadioGroup row>
              <FormControlLabel
                value="home"
                control={<Radio />}
                label="Nhà riêng"
              />
              <FormControlLabel
                value="office"
                control={<Radio />}
                label="Văn phòng"
              />
            </RadioGroup>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Trở lại
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveAddress}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Address;
